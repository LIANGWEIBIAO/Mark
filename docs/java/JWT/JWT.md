# JWT

Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（[(RFC 7519](https://link.jianshu.com?t=https://tools.ietf.org/html/rfc7519)).该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密。

## 基于token认证和服务器认证的区别

### 基于服务器的认证

HTTP协议是无状态的，也就是说，如果我们已经认证了一个用户，那么他下一次请求的时候，服务器不知道我是谁，我们必须再次认证

传统的做法是将已经认证过的用户信息存储在服务器上，比如Session。用户下次请求的时候带着Session ID，然后服务器以此检查用户是否认证过。

这种基于服务器的身份认证方式存在一些问题：

Sessions : 每次用户认证通过以后，服务器需要创建一条记录保存用户信息，通常是在内存中，随着认证通过的用户越来越多，服务器的在这里的开销就会越来越大。

Scalability : 由于Session是在内存中的，这就带来一些扩展性的问题。

CORS : 当我们想要扩展我们的应用，让我们的数据被多个移动设备使用时，我们必须考虑跨资源共享问题。当使用AJAX调用从另一个域名下获取资源时，我们可能会遇到禁止请求的问题。

CSRF : 用户很容易受到CSRF攻击。

### 基于token的鉴权机制

基于token的鉴权机制类似于http协议也是无状态的，它不需要在服务端去保留用户的认证信息或者会话信息。这就意味着基于token认证机制的应用不需要去考虑用户在哪一台服务器登录了，这就为应用的扩展提供了便利。

流程上是这样的：

- 用户使用用户名密码来请求服务器
- 服务器进行验证用户的信息
- 服务器通过验证发送给用户一个token
- 客户端存储token，并在每次请求时附送上这个token值
- 服务端验证token值，并返回数据

### jwt与session的差异

相同点是，它们都是存储用户信息；然而，Session是在服务器端的，而JWT是在客户端的。

Session方式存储用户信息的最大问题在于要占用大量服务器内存，增加服务器的开销。

而JWT方式将用户状态分散到了客户端中，可以明显减轻服务端的内存压力。

Session的状态是存储在服务器端，客户端只有session id；而Token的状态是存储在客户端。
![1588144490563](assets/1588144490563.png)

## JWT长什么样？

JWT是由三段信息构成的，将这三段信息文本用`.`链接一起就构成了Jwt字符串。就像这样:

```java
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

### JWT的构成

第一部分我们称它为头部（header)

第二部分我们称其为载荷（payload, 类似于飞机上承载的物品)

第三部分是签证（signature).

### header

jwt的头部承载两部分信息：

- 声明类型，这里是jwt
- 声明加密的算法 通常直接使用 HMAC SHA256

完整的头部就像下面这样的JSON：

```json
{
  'typ': 'JWT',
  'alg': 'HS256'
}
```

然后将头部进行base64加密（该加密是可以对称解密的),构成了第一部分

```java
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
```

### playload

载荷就是存放有效信息的地方。这个名字像是特指飞机上承载的货品，这些有效信息包含三个部分

- 标准中注册的声明
- 公共的声明
- 私有的声明

**标准中注册的声明** (建议但不强制使用) ：

-  **iss**: jwt签发者
-  **sub**: jwt所面向的用户
-  **aud**: 接收jwt的一方
-  **exp**: jwt的过期时间，这个过期时间必须要大于签发时间
-  **nbf**: 定义在什么时间之前，该jwt都是不可用的.
-  **iat**: jwt的签发时间
-  **jti**: jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击。

**公共的声明** ：
 公共的声明可以添加任何的信息，一般添加用户的相关信息或其他业务需要的必要信息.但不建议添加敏感信息，因为该部分在客户端可解密.

**私有的声明** ：
 私有声明是提供者和消费者所共同定义的声明，一般不建议存放敏感信息，因为base64是对称解密的，意味着该部分信息可以归类为明文信息。

定义一个payload:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

然后将其进行base64加密，得到Jwt的第二部分。

```java
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9
```

### signature

jwt的第三部分是一个签证信息，这个签证信息由三部分组成：

- header (base64后的)
- payload (base64后的)
- secret

这个部分需要base64加密后的header和base64加密后的payload使用`.`连接组成的字符串，然后通过header中声明的加密方式进行加盐`secret`组合加密，然后就构成了jwt的第三部分。

```java
// javascript
var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);

var signature = HMACSHA256(encodedString, 'secret'); // TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

将这三部分用`.`连接成一个完整的字符串,构成了最终的jwt:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

注意：secret是保存在服务器端的，jwt的签发生成也是在服务器端的，secret就是用来进行jwt的签发和jwt的验证，所以，它就是你服务端的私钥，在任何场景都不应该流露出去。一旦客户端得知这个secret, 那就意味着客户端是可以自我签发jwt了。

## 如何应用

一般是在请求头里加入`Authorization`，并加上`Bearer`标注：

```javas
fetch('api/user/1', {
  headers: {
    'Authorization': 'Bearer ' + token
  }
})
```

服务端会验证token，如果验证通过就会返回相应的资源。整个流程就是这样的:

![1588144957228](assets/1588144957228.png)

## JWT的整合使用

1：引入依赖

```xml
<dependency>
    <groupId>com.auth0</groupId>
    <artifactId>java-jwt</artifactId>
    <version>2.2.0</version>
</dependency>
```

2:工具类

```java



import com.auth0.jwt.JWTSigner;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.internal.com.fasterxml.jackson.databind.ObjectMapper;
 
import java.util.HashMap;
import java.util.Map;
 
/**
 * JWT工具类
 */
public class JWTUtils {
 
    private static final String SECRET = "XX#$%()(#*!()!KL<><MQLMNQNQJQK sdfkjsdrow32234545fdf>?N<:{LWPW";
    private static final String EXP = "exp";
    private static final String PAYLOAD = "payload";
    //加密，传入一个对象和有效期
    public static <T> String sign(T object, long maxAge) {
        try {
            final JWTSigner signer = new JWTSigner(SECRET);
            final Map<String, Object> claims = new HashMap<String, Object>();
            ObjectMapper mapper = new ObjectMapper();
            String jsonString = mapper.writeValueAsString(object);
            claims.put(PAYLOAD, jsonString);//传输相关信息
            claims.put(EXP, System.currentTimeMillis() + maxAge);//过期时长
            return signer.sign(claims);
        } catch (Exception e) {
            return null;
        }
    }
 
    //解密，传入一个加密后的token字符串和解密后的类型
    public static <T> T unsign(String jwt, Class<T> classT) {
        final JWTVerifier verifier = new JWTVerifier(SECRET);
        try {
            final Map<String, Object> claims = verifier.verify(jwt);
            if (claims.containsKey(EXP) && claims.containsKey(PAYLOAD)) {
                long exp = (Long) claims.get(EXP);
                long currentTimeMillis = System.currentTimeMillis();
                if (exp > currentTimeMillis) {
                    String json = (String) claims.get(PAYLOAD);
                    ObjectMapper objectMapper = new ObjectMapper();
                    return objectMapper.readValue(json, classT);
                }
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }
 
}
```

3：登录放在header中返回给前台。

```java
public static Long jwtMaxAge = 30L * 60L * 1000L。半小时。
```

![1588145062813](assets/1588145062813.png)

4：每次请求验证

```java



import com.rongji.common.annotation.Log;
import com.rongji.common.config.Constant;
import com.rongji.common.entity.LogEntity;
import com.rongji.common.service.LogService;
import com.rongji.common.utils.*;
import com.rongji.system.entity.JWTentity;
import com.rongji.system.entity.SysUserTokenEntity;
import com.rongji.system.service.SysUserService;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
 
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;
import java.util.*;
 
 
@Aspect
@Component
public class LogAspect {
    private static final Logger logger = LoggerFactory.getLogger(LogAspect.class);
 
    @Autowired
    LogService logService;
 
    @Autowired
    SysUserService userService;
 
    @Pointcut("execution(* com.*.controller..*(..)))")
    public void logPointCut() {
    }
 
    @Around("logPointCut()")
    public Object around(ProceedingJoinPoint point) {
        //判断token信息
        HttpServletRequest request = HttpContextUtils.getHttpServletRequest();
        String token = request.getHeader("token");
        //如果传的值不存在：1：登录 2：过期
        String uri = request.getRequestURI();
        String method = request.getMethod();
        boolean isLogin = StringUtils.equals("/login", uri) && StringUtils.equals("POST", method);
        JWTentity user = null;
        R r =R.error(Constant.jwtErrorCode, "session失效，请重新登录");
        if (StringUtils.isEmpty(token)) {
            //进入的是登录界面
            if (!isLogin) {
                //其他接口：session过期
                return r;
            }
        } else if (!isLogin) {
            //校验
            user = JWTUtils.unsign(token, JWTentity.class);
            if (user == null) {
                //返回错误信息
                return r;
            } else {
                Long userId = user.getUserId();
                //判断是否在黑名单里面
                List tokens = userService.getUserToken(userId);
                if (tokens.contains(token)) {
                    return r;
                }
                // 执行时长(毫秒)
                long time = Constant.jwtMaxAge - user.getLoginDate().getSeconds();
                if (0 < time && time <= Constant.jwtDelayMinAge) {
                    return r;
                }
                //延时
                delayTime(token, user, userId, time);
            }
        }
        long beginTime = System.currentTimeMillis();
        // 执行方法
        Object result = null;
        try {
            result = point.proceed();
        } catch (Throwable throwable) {
           logger.error(throwable.toString());
        }
        // 执行时长(毫秒)
        long time = System.currentTimeMillis() - beginTime;
        //异步保存日志
        saveLog(point, time, user);
        return result;
    }
    private void delayTime(String token, JWTentity user, Long userId, long time) {
        if (time > 0 && time < Constant.jwtDelayMaxAge) { //延时
            HttpServletResponse response = HttpContextUtils.getHttpServletResponse();
            user.setLoginDate(new Date());
            String jwtToken = JWTUtils.sign(user, Constant.jwtMaxAge);
            response.setHeader("token", jwtToken);
            //保存黑名单
            SysUserTokenEntity userToken = new SysUserTokenEntity();
            userToken.setUserId(userId);
            userToken.setTokenId(token);
            userToken.setOperDate(new Date());
            userService.saveUserTokenEntity(userToken);
        }
    }
    void saveLog(ProceedingJoinPoint joinPoint, long time, JWTentity user) {
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Method method = signature.getMethod();
        LogEntity sysLog = new LogEntity();
        //Log syslog = method.getAnnotation(Log.class);
        //if (syslog != null) {
            // 注解上的描述
           // sysLog.setOperation(className + "." + methodName + "()");
       // }
        // 请求的方法名
        String className = joinPoint.getTarget().getClass().getName();
        String methodName = signature.getName();
        sysLog.setMethod(className + "." + methodName + "()");
        // 请求的参数
        HttpServletRequest request = HttpContextUtils.getHttpServletRequest();
        Object[] args = joinPoint.getArgs();
//        String params1 = JSONUtils.beanToJson(args[0]);
  //      sysLog.setParams(params1);
        // 获取request
        // HttpServletRequest request = HttpContextUtils.getHttpServletRequest();
        StringBuffer url = request.getRequestURL();
        String uri = request.getRequestURI();
        // 设置IP地址
        String ip = IPUtils.getIpAddr(request);
        sysLog.setIp(ip);
        if (user != null) {
            Long userId = user.getUserId();
            if (userId != null) {
                sysLog.setUserId(userId);
            }
            String userName = user.getUserName();
            if (StringUtils.isNotEmpty(userName)) {
                sysLog.setUsername(userName);
            }
        }
        sysLog.setTime((int) time);
        // 系统当前时间
        Date date = new Date();
        sysLog.setGmtCreate(date);
        // 保存系统日志
        logService.save(sysLog);
    }
}
```

前台vue实现，接收token，并放在header中每次请求带着：

```javascript
import axios from 'axios';
import Qs from 'qs';
import router from '../router';
import {MessageBox} from 'element-ui';
 
let host = "http://192.168.1.178:7171";
const instance = axios.create({
  baseURL: host,
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  withCredentials: true
});
instance.interceptors.request.use(config => {
 // 判断是否存在token，如果存在的话，则每个http header都加上token
  let jsessionid = localStorage.getItem("token");
   if(jsessionid) {
    config.headers.token = jsessionid;
   }
   return config;
})
 
instance.interceptors.response.use(res =>{
   let ssession = res.headers.token;
   if(ssession){
     localStorage.setItem("token",ssession);
   }
  return handleResponse(res);
})
```

问题：由于前后端分离问题，需要在response中设置参数：

```java



import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpStatus;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.stereotype.Component;
 
import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
 
@Component
@ServletComponentScan
@WebFilter(urlPatterns = "/*",filterName = "CORSFilter")
public class CORSFilter implements Filter {
 
    private static final long serialVersionUID = 1L;
 
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
 
    }
 
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        HttpServletRequest request=(HttpServletRequest)servletRequest;
        response.setContentType("text/plain;charset=UTF-8");
        response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
        response.setHeader("Access-Control-Max-Age", "1728000");
        response.setHeader("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, " +
                "Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With,userId,token");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("XDomainRequestAllowed","1");
        //添加可以返回自定义header信息
        response.setHeader("Access-Control-Expose-Headers","token");
        if ("OPTIONS".equals(request.getMethod())){//这里通过判断请求的方法，判断此次是否是预检请求，如果是，立即返回一个204状态吗，标示，允许跨域；预检后，正式请求
            response.setStatus(HttpStatus.SC_NO_CONTENT); //HttpStatus.SC_NO_CONTENT = 204
            return;
        }
     
        filterChain.doFilter(servletRequest,servletResponse);
    }
 
    @Override
    public void destroy() {
 
    }
 
    /**
     * 重新封装request包装类
     */
    class MyHttpServletRequestWrapper extends HttpServletRequestWrapper {
        private String url;
 
        public MyHttpServletRequestWrapper(HttpServletRequest request,String url) {
            super(request);
            this.url=url;
        }
        @Override
        public String getServletPath() {
            if(super.getDispatcherType().name().equals("REQUEST")) {
                return url;
            } else {
                return super.getServletPath();
            }
        }
    }
 
}
```


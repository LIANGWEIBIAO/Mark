# JAVA文件上传下载原理

# 文件上传原理

通过为表单元素设置`Method="post" enctype="multipart/form-data"`属性,让表单提提交的数据以二进制编码的方式提交,在接受此请求的`Servlet`中用二进制流来获取内容,就可以取得上传文件的内容,从而实现文件上传.

其中`enctype`属性有三种:

1. `application/x-www-form-urlencoded`这是默认编码方式,它只处理表单域里的value属性值,采用这种编码方式的表单会将表单域的值处理成url编码方式.

2. `multipart/form-data`这种编码方式的表单会以二进制流的方式来处理表单数据,这种编码方式会把文件域指定文件的内容也封装到请求参数里.

3. `text/plain `这种方式主要适用于直接通过表单发送邮件的方式.
   


# 文件下载原理

1. 需要通过`HttpServletResponse.setContentType`方法设置`Content-Type`头字段的值,为浏览器无法使用某种方式或激活某个程序来处理的MIME类型,例如,`"application/octet-stream"`或`"application/x-msdownload"`等。
2. 需要通过`HttpServletResponse.setHeader`方法设置`Content-Disposition`头的值为`"attachment;filename=文件名"`。
3. 读取下载文件,调用`HttpServletResponse.getOutputStream`方法返回的`ServletOutputStream`对象来向客户端写入附件文件内容。
   
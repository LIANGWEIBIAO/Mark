# 小程序HTTP请求封装
``` javascript
iport {config} from "/config.js"
function request(params){
   if(!params.method){
      params.method = "GET"
   }
   ex.request({
         url:config.pai_base_url+ params.url,
         method:params.method,
         data:params.data,
         header:{'content-type':'application/json'},
         success:(res)=>{
         
         },fail:(err)=>{
         }
   })
}
export request

```
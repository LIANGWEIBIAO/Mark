# MD5加密

``` javascript
const crypto = require('crypto');
module.exports = {
    md5:function(str){
        return crypto.createHash("md5").update(str).digest("hex");
    }
}
```
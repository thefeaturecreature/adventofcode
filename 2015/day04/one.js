// npm install md5
var md5 = require('md5');
const key = "yzbqklnj";

for(i=1;i > 0; i++){
    hash = md5(key + i);
    if(hash.substring(0, 5) == "00000"){
        console.log(i);
        break;
    }
}
// answer: 282749

var md5 = require('md5');
const key = "yzbqklnj";

for(i=1;i > 0; i++){
    hash = md5(key + i);
    if(hash.substring(0, 6) == "000000"){
        console.log(i);
        break;
    }
}
// answer: 9962624
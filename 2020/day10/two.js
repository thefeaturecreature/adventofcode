const aoc = require('../../lib/aoc.js');
let knapsack = inputfile('testinput.txt');

let connectors = knapsack.map(e => Number(e));
connectors.push(0);
connectors.push(Math.max.apply(null,knapsack) + 3);
connectors.sort((a,b) => a-b);
let spaces = connectors.map((e,i,all) => {
    if(e - all[i - 1] == 1 && all[i + 1] - e == 1 ) {
        return 1;
    } else {
        return 0;
    }
}).reduce((sum,a) => sum+a);
 
console.log(spaces)

function rFact(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
}
sum = 0;
num = spaces;
for(i=1;i<=num;i++){
sum += Math.floor(rFact(num) / (rFact(num-i) * rFact(i)));
console.log("iter:",i,"cal:", Math.floor( rFact(num) / (rFact(num-i) * rFact(i))))
}
console.log(sum + 1)

//TODO: rewrite to not factor 1(111)1 complete, but as 1(11x)1 1(1x1)1, 1(11x)1
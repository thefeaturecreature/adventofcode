const aoc = require('../lib/aoc.js');

let myval = 366
  max = 2017;
  current = 0
  list = [0];
  
for (i = 1; i <= max ; i++) {
  current = roundthesun(i, current, myval + 1);
  list.splice(current, 0, i);
}
console.log(list[list.indexOf(max) + 1]);
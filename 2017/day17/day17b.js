const aoc = require('../lib/aoc.js');

let myval = 366
  max = 50000000;
  current = 0;
  uno = 1;

for (i = 1; i <= max ; i++) {
  current = roundthesun(i, current, myval + 1);
  if (current == 0) uno = i;
}
console.log(uno);

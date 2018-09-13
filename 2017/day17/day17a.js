let myval = 366
  max = 2017;
  list = [0];
  current = 0
for (i = 1; i <= max ; i++) {
  current = (current + myval + 1) % i;
  list.splice(current, 0, i);
}

console.log(list[list.indexOf(max) + 1]);
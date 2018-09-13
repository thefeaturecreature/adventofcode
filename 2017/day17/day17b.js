let myval = 366
  max = 50000000;
  current = 0;
  uno = 1;

for (i = 1; i <= max ; i++) {
  current = (current + myval + 1) % i;
  if (current == 0) uno = i;
}
console.log(uno);

// TODO: Finish
const aoc = require('../lib/aoc.js');
//const instruct = inputfile('./day10.txt');
const instruct = '1,2,3'
const salt = [17, 31, 73, 47, 23]

let instructmod = '';
for (let v of instruct) {
	instructmod += (v == ","?":":"") + v + (v == ","?":":"")
  console.log(v);
}

instructions = instructmod.split(':').map(step => {
	return step.charCodeAt();
})

let circle = [];
for (i=0; i<256; i++){
	circle.push(i);
}

// stepknots = (array,steps, skipsize = 0, current = 0)
console.log(instructions.concat(salt))

/*
Run a total of 64 rounds, using the same length sequence in each round. 
The current position and skip size should be preserved between rounds. 

Once the rounds are complete, you will be left with the numbers from 0 to 255 in some order, 
called the sparse hash. 
Your next task is to reduce these to a list of only 16 numbers called the dense hash. 
To do this, use numeric bitwise XOR to combine each consecutive block of 16 numbers 
in the sparse hash (there are 16 such blocks in a list of 256 numbers). 

Finally, the standard way to represent a Knot Hash is as a single hexadecimal string; 
the final output is the dense hash in hexadecimal notation. 
Because each number in your dense hash will be between 0 and 255 (inclusive), 
always represent each number as two hexadecimal digits (including a leading zero as necessary). 
So, if your first three numbers are 64, 7, 255, they correspond to the hexadecimal numbers 40, 07, ff, 
and so the first six characters of the hash would be 4007ff. Because every Knot Hash is sixteen such numbers, 
the hexadecimal representation is always 32 hexadecimal digits (0-f) long.
*/

// let a = 65 ^ 27 ^ 9 ^ 1 ^ 4 ^ 3 ^ 40 ^ 50 ^ 91 ^ 7 ^ 6 ^ 0 ^ 2 ^ 5 ^ 68 ^ 22;
// console.log(a);
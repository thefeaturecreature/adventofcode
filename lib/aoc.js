/* Choices:
1. single or multi line input file
2. what to break on (defaults to new line)
*/
inputfile = (inputfile, newline = true, breakpoint = '\n') => {
    fs = require('fs')
    output = fs.readFileSync(inputfile, 'utf8')
    switch (newline) {
            case true:
            case 'multi':
                return output.split(breakpoint);
                break;
            case false: 
            case 'single':
                if (breakpoint != '\n') {
                    return output.split(breakpoint);
                } else {
                    return output;
                }
                break;
    }
}

/* Usage: to compare all combos between every two elements in an array
1. pass in as allcompare(ARRAY, (a,b) => {CALLBACK})
2. CALLBACK is your compare function
3. this has no return of its own. add a collector, or something.

e.g.
allcompare(elements, (numA, numB) => {
			if(numA != numB && numA % numB == 0) { 
				diff = numA / numB;
			}
		})
*/

allcompare = (input, callback) => {
  input.forEach((wordA, indexA) => {
    input.forEach((wordB, indexB) => 
      callback(wordA, wordB, indexA, indexB))
  })
}

// Same as above, but you get a,b,c to do all three-way compares
threewaycompare = (input, callback) => {
    input.forEach((wordA, indexA) => {
        input.forEach((wordB, indexB) => {
            input.forEach((wordC, indexC) => {
                callback(wordA, wordB, wordC, indexA, indexB, indexC)
            })
        })
    })
}

knothash = (array, current, step) => {
  let asize = array.length;
  let sliceend = current + step;

  if(sliceend <= asize) {
    let lastend = asize;

    let first = (current != 0)? array.slice(0,current) : [];
    let middle = (step > 0)? array.slice(current, sliceend) : [];
    let last = (sliceend <= asize)? array.slice(sliceend,lastend) : [];

    return first.concat(middle.reverse(),last);
  } else {
    let remainder = sliceend - asize;

    let first = array.slice(0,remainder);
    let middle = array.slice(remainder, current);
    let last = array.slice(current,asize);
    let wholeslice = last.concat(first);
      wholeslice = wholeslice.reverse();

      last = wholeslice.slice(0,step - remainder);
      first = wholeslice.slice(wholeslice.length - remainder, asize);
      
    return first.concat(middle,last);
  }
}

stepknots = (array,steps, skipsize = 0, current = 0) => {
  steps.forEach(step => {
    step = parseInt(step);
    array = knothash(array,current,step);
    current += step;
    current += skipsize;
    skipsize += 1;
  
    if (current >= array.length) {
      current = current - array.length;
    }
  })
  return array;
}

// Loop an array as you step 
roundthesun = (length, start, steps) => (start + steps) % length;

// New Number prototype to find charAt
Number.prototype.digitAt = (c) => Math.floor(Number(this) / Math.pow(10,(Math.floor(Math.log(this) / Math.LN10)) - c ) % 10);

// Return an array of unique elements from an an array
Array.prototype.unique = function() { return this.filter((me,i,all) => i == all.indexOf(me));}

// Not finished -- trying to build a prototype to do .forEach but for multiples of n indexes instead.
Array.prototype.forNth = function(n, callback) {
    for (let i = 0; i < this.length; i+= n) {
      callback(this[i]);
    }
  }
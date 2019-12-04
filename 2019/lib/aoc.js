inputfile = (inputfile, newline = true) => {
  fs = require('fs')
  output = fs.readFileSync(inputfile, 'utf8')
  return (newline)? output.split('\n') : output
}

allcompare = (input, callback) => {
  input.forEach((wordA, indexA) => {
    input.forEach((wordB, indexB) => 
      callback(wordA, wordB, indexA, indexB))
  })
}

String.prototype.count=function(c) { 
  return this.split(c).length
};

Number.prototype.count=function(c) {
  let digits = 0,
      length = Math.floor(Math.log(this) / Math.LN10);
  for(i=0;i<=length;i++){
      digit = Math.floor(Number(this) / Math.pow(10,length - i ) % 10)
      if(digit != c) digits++
  }
  return digits
}

Number.prototype.digitAt =function(c) {
  return  Math.floor(Number(this) / Math.pow(10,(Math.floor(Math.log(this) / Math.LN10)) - c ) % 10);
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

roundthesun = (length, start, offset) => {
  return (start + offset) % length;
}

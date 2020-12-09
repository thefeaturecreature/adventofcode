const aoc = require('../../lib/aoc.js');
const datastream = inputfile('input.txt');

const length = 25;

const procstream = data => {
    let error = false,
        index = length,
        target = 0;

    do{
        target = data[index];
        let prestart = index - length;
        let preamble = data.slice(prestart, index).sort((a,b) => a-b);
        for (i=0;i<preamble.length;i++) {
            let difference = target - preamble[i],
                addend = preamble.indexOf(String(difference));
            if( addend != -1 && addend != i) {
                error = false;
                index++;    
                break;
            } else {
                error = true;
            }
        } 
    } while (!error)   
    return target;
}
console.log(procstream(datastream))
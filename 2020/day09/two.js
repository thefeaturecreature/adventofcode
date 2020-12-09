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

sumtrain = data => {
    const target = procstream(data);
    data = data.map(e => Number(e));

    let engine = 1,
        caboose = 0,
        sum = data[engine] + data[caboose],
        found = false;

    do {
        
            if(sum == target) {      
                snippet = data.slice(caboose,engine+1).sort((a,b)=>a-b);  
                summm = snippet.reduce((acc,e)=>acc+e); 
                min = Math.min.apply(null,snippet);
                max = Math.max.apply(null,snippet);
                return min+max;
            } else if (sum < target) {
                engine++
                sum += data[engine]
            } else if (sum > target) {
                sum -= data[caboose]
                caboose++
            }

    } while (found == false);
}

console.log(sumtrain(datastream));
// Incomplete

const aoc = require('../../lib/aoc.js');
const vents = inputfile('vents.txt');

let crossed = 0;

const parsed = line =>{
    const parser = /([\d]+),([\d]+) -> ([\d]+),([\d]+)/;; 
    const p = [,x1,y1,x2,y2] = parser.exec(line);
    let current = {
        x1: parseInt(x1),
        y1: parseInt(y1),
        x2: parseInt(x2),
        y2: parseInt(y2)
    };

        let type = "";
        if(current.x1 == current.x2){
            current.type = "v";
            if (current.y1 > current.y2) [current.x1,current.y1,current.x2,current.y2] = [current.x2, current.y2,current.x1,current.y1]
        } else if (current.y1 == current.y2) {
            current.type = "h";
            if (current.x1 > current.x2) [current.x1,current.y1,current.x2,current.y2] = [current.x2, current.y2,current.x1,current.y1]
        }
    return current;
}
const rolln = vents.filter(e=>{
                                const current = parsed(e);
                                return current.x1 == current.x2 || current.y1 == current.y2;
                            })
                   .forEach((e,i, arr)=> {
    for(loop = i + 1; loop < arr.length; loop++) {
        const current = parsed(e);
        const compare = parsed(arr[loop]);
            
        if (current.type == "h" && compare.type == "h" && current.y1 == compare.y1) {
            switch (true) {
                case (current.x1 <= compare.x1 && current.x2 >= compare.x1 && current.x2 < compare.x2):
                    crossed += current.x2 - compare.x1 + 1;
                    console.log("left overlap case", current,compare);
                    console.log(current.x2 - compare.x1 + 1)
                    break;
                case (current.x1 <= compare.x1 && current.x2 >= compare.x2):
                    crossed += compare.x2 - compare.x1 + 1;
                    console.log("left consume case", current,compare);
                    console.log(compare.x2 - compare.x1 + 1)
                    break;
                case (current.x1 > compare.x1 && current.x1 <= compare.x2 && current.x2 > compare.x2):
                    crossed += compare.x2 - current.x1 + 1;
                    console.log("right overlap case", current,compare);
                    console.log(compare.x2 - current.x1 + 1)
                    break;
                case (current.x1 >= compare.x1 && current.x2 <= compare.x2):
                    crossed += current.x2 - current.x1 + 1;
                    console.log("right consume case", current,compare)
                    console.log(current.x2 - current.x1 + 1)
                    break;
            }
        }
        
        if (current.type == "v" && compare.type == "v" && current.x1 == compare.x1) {
            switch (true) {
                case (current.y1 <= compare.y1 && current.y2 >= compare.y1 && current.y2 < compare.y2):
                    console.log("left overlap case", current,compare);
                    console.log(current.y2 - compare.y1 + 1)
                    break;
                case (current.y1 <= compare.y1 && current.y2 >= compare.y2):
                    console.log("left consume case", current,compare);
                    console.log(compare.y2 - compare.y1 + 1)
                    break;
                case (current.y1 > compare.y1 && current.y1 <= compare.y2 && current.y2 > compare.y2):
                    console.log("right overlap case", current,compare);
                    console.log(compare.y2 - current.y1 + 1)
                    break;
                case (current.y1 >= compare.y1 && current.y2 <= compare.y2):
                    console.log("right consume case", current,compare)
                    console.log(current.y2 - current.y1 + 1)
                    break;
            }
        }

        // 5. check crossing
        switch (true) {
            case (current.type == "v" && compare.type == "h" 
            && current.x1 <= compare.x2 && current.x1 >= compare.x1
            && compare.y1 <= current.y2 && compare.y1 >= current.y1):
            crossed += 1; 
                console.log("cv cross case", current,compare);
                console.log(1)
                break;
            case (current.type == "h" && compare.type == "v" 
            && compare.x1 <= current.x2 && compare.x1 >= current.x1
            && current.y1 <= compare.y2 && current.y1 >= compare.y1): 
                crossed += 1; 
                console.log("ch cross case", compare,current);
                console.log(1)
                break;
                
        }
        // console.log(i, loop, "U:",current.x1,current.y1,":",current.x2,current.y2,current.type,
        //             " | A:",compare.x1,compare.y1,":",compare.x2,compare.y2,compare.type,
        //             " typematch: ",compare.type == current.type)

    }
})
console.log("crossed: ", crossed)

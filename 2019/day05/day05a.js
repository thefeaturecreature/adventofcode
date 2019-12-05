const aoc = require('../lib/aoc.js');
const computer = inputfile('./day05.txt', false);

let userinput = 1,
    intcode = compute => compute 
                        .split(",")
                        .map(node => Number(node))

let instructions = compute => {
    for(i=0; i < compute.length;i) {
        opcode = compute[i]
        input1 = compute[i + 1]
        input2 = compute[i + 2]
        output = compute[i + 3]
        switch (opcode) {
            case 1:
                compute[output] = compute[input1] + compute[input2]
                i+=4;
                break;
            case 2:
                compute[output] = compute[input1] * compute[input2]
                i+=4;
                break;
            case 3:
                console.log(userinput)
                compute[output] = userinput;
                i+=2;
                break;
            case 4:
                console.log(compute[input1])
                i+=4;
                break;
            case 99:
                i = compute.length;   
                break;
        }
    }
}
  instructions(intcode(computer));

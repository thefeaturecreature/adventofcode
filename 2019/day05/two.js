const aoc = require('../../lib/aoc.js');
const computer = inputfile('input.txt', false);
// computer = '3,225,1,225,6,6,1100,1,238,225,104,0'
  

let userinput = 5,
    intcode = compute => compute 
                                .split(",")
                                .map(node => Number(node))

let instructions = compute => {
    let i = 0,
        run = true;
    do {
        instr = compute[i];
        codelen = String(instr).length
        opcode = (instr.digitAt(codelen - 2) != 9)? instr.digitAt(codelen - 1): 0;
        param1 = (codelen - 3 >=0)? instr.digitAt(codelen - 3): 0;
        param2 = (codelen - 4 >=0)? instr.digitAt(codelen - 4): 0;
        
        input1 = (param1 == 0?compute[compute[i + 1]]:compute[i + 1]);
        input2 = (param2 == 0?compute[compute[i + 2]]:compute[i + 2]);
        output = compute[i + 3];

        console.log("--- (" + i + ")")
        console.log(i);
        console.log("instr: ", instr)
        console.log("codelen: " + codelen)
        console.log("opcode: " + opcode)
        console.log("param1 at: (" + (codelen - 3) + ") " + param1)
        console.log("input1: " + compute[compute[i + 1]], compute[i + 1], "as " + input1)
        console.log("param2 at: (" + (codelen - 4) + ") " + param2)
        console.log("input2: " + compute[compute[i + 2]], compute[i + 2], "as " + input2)
        console.log("output: " + compute[compute[i + 3]])

        if (i < 0 || i > compute.length) run = false;
        switch (opcode) {
            case 1:
                compute[output] = input1 + input2
                i+=4
                break;
            case 2:
                compute[output] = input1 * input2
                i+=4
                break;
            case 3:
                compute[input1] = userinput;
                i+=2
                break;
            case 4:
                console.log("==== Output (not 6731945): " + input1)
                i+=2
                break;
            case 5: 
                i = (input1 != 0)?input2 - 1: i+3
                break;
            case 6: 
                i = (input1 == 0)?input2 - 1: i+3
                break;
            case 7:
                compute[output] = (input1 < input2)?1:0;
                i+=4
            case 8:
                compute[output] = (input1 == input2)?1:0;
                i+=4
            case 9:
                run = false; 
                break;
            default:
                i+=4
        }
    } while(run)
}
  
instructions(intcode(computer));

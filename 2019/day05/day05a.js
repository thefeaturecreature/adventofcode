const aoc = require('../lib/aoc.js');
const computer = inputfile('./day05.txt', false);

let userinput = 1,
    intcode = compute => compute 
                        .split(",")
                        .map(node => Number(node))

let instructions = compute => {
    for(i=0; i < compute.length;i+=4) {
        instr = compute[i];
        codelen = String(instr).length
        opcode = (codelen - 1 >=0)? instr.digitAt(codelen - 1): 0;
        param1 = (codelen - 3 >=0)? instr.digitAt(codelen - 3): 0;
        param2 = (codelen - 4 >=0)? instr.digitAt(codelen - 4): 0;
        
        input1 = (param1 == 0?compute[compute[i + 1]]:compute[i + 1]);
        input2 = (param2 == 0?compute[compute[i + 2]]:compute[i + 2]);
        output = compute[i + 3];

        switch (opcode) {
            case 1:
                compute[output] = input1 + input2
                break;
            case 2:
                compute[output] = input1 * input2
                break;
            case 3:
                compute[i + 1] = userinput;
                i-=2;
                break;
            case 4:
                console.log(input1)
                i-=2;
                break;
            case 9:
                i = compute.length;   
                break;
            default:
        }
    }
}
  instructions(intcode(computer));

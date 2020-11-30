// TODO: Unfinished at some point.
const aoc = require('../../lib/aoc.js');
const computer = inputfile('input.txt', false);

let userinput = 1,
    intcode = compute => compute 
                        .split(",")
                        .map(node => Number(node))

let instructions = compute => {
    let i = 0,
        run = true;
    do {
        instr = compute[i];
        codelen = String(instr).length
        opcode = (instr != 99999)? instr.digitAt(codelen - 1): 0;
        param1 = (codelen > 2? instr.digitAt(codelen - 3): 0);
        param2 = (codelen > 3? instr.digitAt(codelen - 4): 0);
        
        immed1 = compute[i + 1];
        pos1 = compute[immed1];
        input1 = (param1 == 0?pos1:immed1);

        immed2 = compute[i + 2];
        pos2 = compute[immed2];
        input2 = (param2 == 0?pos2:immed2);

        output = compute[i + 3];

        // console.log(`--- ${i}`)
        // console.log(`instr: ${instr}`)
        // console.log(`codelen: ${codelen}`)
        // console.log(`opcode: ${opcode}`)
        // console.log(`param1 at: ${param1} : input1: ${immed1} or ${pos1} as ${input1}`)
        // console.log(`param2 at: ${param2} : input2: ${immed2} or ${pos2} as ${input2}`)
        // console.log(`output: ${output}`)
        // console.log(`run: ${run}`)

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
                immed1 = userinput;
                i+=2
                break;
            case 4:
                console.log(`===========================================    ${input1}`)
                i+=2
                break;
            case 9:
                run = false; 
                break;
            default:
                i+=1
        }
    } while(run)
}
instructions(intcode(computer));
// Answer: 6731945
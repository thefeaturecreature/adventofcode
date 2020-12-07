const aoc = require('../../lib/aoc.js');
const instructions = inputfile('input.txt');

// https://regex101.com/r/VBWa6S/1
gates = instructions.forEach(bitentry => {
    bit = (/^(?<inputa>[^\s]+)?[\s]?(?:(?<direction>AND|OR|LSHIFT|RSHIFT|NOT)[\s]?(?<inputb>\w)+)? -> (?<output>\w)+/)
    bit.inputa 
    bit.inputb
    bit.inputc
    
    if(bitentry.includes('AND')) {
        bit = bitentry.match(/(?<input1>\w)+ AND (?<input2>\w)+ -> (?<output>\w)+/).groups;
        bit.output = bit.input1 & bit.input2;
        bit.output = bit.inputa & bit.inputb;

    } else if (bitentry.includes('OR')) {
        bit = bitentry.match(/(?<input1>\w)+ OR (?<input2>\w)+ -> (?<output>\w)+/).groups
        bit.output = bit.input1 | bit.input2;

    } else if (bitentry.includes('NOT')) {
        bit = bitentry.match(/NOT (?<input1>\w)+ -> (?<output>\w)+/).groups
        bit.output = ~ bit.input1;

    } else if (bitentry.includes('LSHIFT')) {
        bit = bitentry.match(/(?<input1>\w)+ LSHIFT (?<input2>\w)+ -> (?<output>\w)+/).groups
        bit.output = bit.input1 << bit.input2;

    } else if (bitentry.includes('RSHIFT')) {
        bit = bitentry.match(/(?<input1>\w)+ RSHIFT (?<input2>\w)+ -> (?<output>\w)+/).groups
        bit.output = bit.input1 >> bit.input2;

    } else {
        bit = bitentry.match(/(?<input1>\w)+ -> (?<output>\w)+/).groups
        bit.output = bit.input1;

    }
    console.log(bit)
})
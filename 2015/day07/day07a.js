const aoc = require('../lib/aoc.js');
//const lightpath = inputfile('./day07.txt', true);


bitprocess = bitentry =>{
    if(bitentry.includes('AND')) {
        bit = bitentry.match(/(?<input1>\w)+ AND (?<input2>\w)+ -> (?<output>\w)+/).groups;
        result = bit.input1 & bit.input2;
    
    } else if (bitentry.includes('OR')) {
        bit = bitentry.match(/(?<input1>\w)+ OR (?<input2>\w)+ -> (?<output>\w)+/).groups
        result = bit.input1 | bit.input2;

    } else if (bitentry.includes('NOT')) {
        bit = bitentry.match(/NOT (?<input1>\w)+ -> (?<output>\w)+/).groups
        result = ~ bit.input1;

    } else if (bitentry.includes('LSHIFT')) {
        bit = bitentry.match(/(?<input1>\w)+ LSHIFT (?<input2>\w)+ -> (?<output>\w)+/).groups
        result = bit.input1 << bit.input2;

    } else if (bitentry.includes('RSHIFT')) {
        bit = bitentry.match(/(?<input1>\w)+ RSHIFT (?<input2>\w)+ -> (?<output>\w)+/).groups
        result = bit.input1 >> bit.input2;

    }
    console.log(bit, result)
}

bitprocess("x AND 1 -> d")
// 123 -> x
// 456 -> y
// x AND y -> d
// x LSHIFT 2 -> f
// y RSHIFT 2 -> g
// NOT x -> h
// NOT y -> i
// After it is run, these are the signals on the wires:

// d: 72
// e: 507
// f: 492
// g: 114
// h: 65412
// i: 65079
// x: 123
// y: 456
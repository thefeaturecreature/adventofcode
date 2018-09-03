const aoc = require('../lib/aoc.js');
const instruct = aoc.inputfile('./day08.txt', true);

let pocket = {}
let top = 0
instruct.forEach(elements => {
  elements = elements.split(' ');
  let ins_name = elements[0];
  let ins_direction = elements[1];
  let ins_duration = parseInt(elements[2]);

  let con_name = elements[4];
  let con_symbol = elements[5];
  let con_result = parseInt(elements[6]);
  (pocket[con_name] == undefined)? pocket[con_name] = 0 : false;

  if (eval(pocket[con_name] + " " + con_symbol + " " + con_result)) {
    let ins_value = (pocket[ins_name] || 0)
    ins_value += (ins_direction == "inc")? ins_duration : (0 - ins_duration);
    pocket[ins_name] = ins_value;
    top = (ins_value > top)? ins_value : top;
  }
})

console.log(top);

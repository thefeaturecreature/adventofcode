const aoc = require('../../lib/aoc.js');
const credentials = inputfile('input.txt', false).split('\n\n');

const validate = passports => passports.map(e =>{ 
    if(    e.includes('byr:')
        && e.includes('iyr:')
        && e.includes('eyr:')
        && e.includes('hgt:')
        && e.includes('hcl:')
        && e.includes('ecl:')
        && e.includes('pid:')
//        && e.includes('cid:')

    ) {
        return 1;
    } else {
        return 0;
    }

})
.reduce((a,b) => a+b)

console.log(validate(credentials));

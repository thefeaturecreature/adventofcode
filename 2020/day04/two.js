const aoc = require('../../lib/aoc.js');
const credentials = inputfile('input.txt', false).split('\n\n');

const validate = passports => passports.map(d =>{ 
        let e = d.replace(/[\n\: ]+/g,",").split(','),
            pp = {};

        for (i=0;i<e.length;i+=2) {
            if(pp[e[i]] === undefined) {
                pp[e[i]] = e[i + 1];                
            } else {
                return 0
            }
        }
    
        if (pp.byr === undefined 
            || !pp.byr.match(/^[\d]{4}$/) 
            || pp.byr < "1920" 
            || pp.byr > "2002") return 0    

        if (pp.iyr === undefined 
            || !pp.iyr.match(/^[\d]{4}$/) 
            || pp.iyr < "2010" 
            || pp.iyr > "2020") return 0    

        if (pp.eyr === undefined 
            || !pp.eyr.match(/^[\d]{4}$/) 
            || pp.eyr < "2020" 
            || pp.eyr > "2030") return 0    
    
        if (pp.hgt !== undefined 
            && pp.hgt.match(/^[\d]{2,3}(cm|in)$/)) {
            if(pp.hgt.match(/cm/)) {
                let hgt = Number(pp.hgt.replace(/(cm|in)/,""));
                if(hgt < 150 || hgt > 193) return 0
            } else { // in
                let hgt = pp.hgt.replace(/(cm|in)/,"");
                if(hgt < 59 || hgt > 76) return 0
            }
        } else { return 0 }

        if (pp.hcl === undefined 
            || !pp.hcl.match(/^#[0-9a-f]{6}$/)) return 0

        if (pp.ecl === undefined 
            || !pp.ecl.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/)) return 0

        if (pp.pid === undefined 
            || !pp.pid.match(/^([\d]{9})$/)) return 0

        return 1;

})
.reduce((a,b) => a+b)

console.log(validate(credentials));
//136 - 189
const aoc = require('../lib/aoc.js');
// const orbits = inputfile('./day06.txt'); //1069
const orbits = ['COM)B','B)C','C)D','D)E','E)F','B)G','G)H','D)I','E)J','J)K','K)L']
let indirect = {},
    orbitlist = [];
    branchqueue = [];

parsetree = inputs => { 
    inputs.map(orbit => orbit.match(/([\w]+)\)([\w]+)/))
        .forEach(orbit => {
            node = "x" + orbit[1];
            leaf = "x" + orbit[2];
            if (!(node in indirect)) indirect[node] = {c: []}
            indirect[node].c.push(leaf)
            orbitlist.push(leaf)
        })
}

counttree = () => {
    let found = true,
        current = "";
        currentcount = 0
        nextbranch = "xCOM"
        indirect[nextbranch]['in'] = currentcount;

    for(i=1;i<orbits.length;i++){
        if(indirect[current].c.length > 1) {
            indirect[current].c.forEach(leaf => {
                indirect[leaf].in = currentcount;
                branchqueue.push(leaf)
            })    
        } else {
            console.log(indirect[current].c[0])
            indirect[current].c[0].in = currentcount;

        }
        branchqueue.forEach(leaf => {
            if (leaf in indirect) return "a";
            nextbranch = leaf
        })
        currentcount = 1;
    }
}

parsetree(orbits)
counttree()

console.log(indirect)
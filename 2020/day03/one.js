const aoc = require('../../lib/aoc.js');
const island = inputfile('input.txt');


const toboggan = forest => {
    let step = 0,
    trees = new Set();
    forest.forEach((tree,index) => {
        let plot = step % tree.length
            step += 3;
        if (tree.charAt(plot) == '#') {
            trees.add('🌲 '+ index);
        }
    });
    return trees.size;
}

console.log(toboggan(island));
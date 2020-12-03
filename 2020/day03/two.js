const aoc = require('../../lib/aoc.js');
const island = inputfile('input.txt');

const toboggan = forest => {
    let width = forest[0].length,
    step = {one:0,two:0,three:0,five:0,seven:0},
    plot = {one:0,two:0,three:0,five:0,seven:0},
    trees = {one:[],two:[],three:[],five:[],seven:[]};
    forest.forEach((tree,index) => {
            plot.one = step.one % width;
            step.one += 1;
            if (tree.charAt(plot.one) == '#') {
                trees.one.push('🌲');
            }
    
            plot.two = step.two % width;
            if (index == 0 || index % 2 == 0) {
                step.two += 1;
                if  (tree.charAt(plot.two) == '#') {
                trees.two.push('🌲');}
            }
                
            plot.three = step.three % width;
            step.three += 3;
            if (tree.charAt(plot.three) == '#') {
                trees.three.push('🌲');
            }
    
            plot.five = step.five % width;
            step.five += 5;
            if (tree.charAt(plot.five) == '#') {
                trees.five.push('🌲');
            }
    
            plot.seven = step.seven % width,
            step.seven += 7;
            if (tree.charAt(plot.seven) == '#') {
                trees.seven.push('🌲');
            }
                
    });
    console.log(`1,1: ${trees.one.length}`);
    console.log(`1,3: ${trees.three.length}`);
    console.log(`1,5: ${trees.five.length}`);
    console.log(`1,7: ${trees.seven.length}`);
    console.log(`2,1: ${trees.two.length}`);
    console.log(`multiplied: ${trees.one.length * trees.three.length * trees.five.length * trees.seven.length * trees.two.length}`)
}
    
toboggan(island);
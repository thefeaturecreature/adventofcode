const aoc = require('../../lib/aoc.js');
const bagrules = inputfile('input.txt');

const findParent = color => {
    pregex = new RegExp(" " + color,"g")
    return bagrules
        .filter((rule,index,all) => rule.match(pregex))
        .map(rule => rule.match(/^(.*?) bags/)[1]);

}

const rulecrawler = color => {
    let queue = new Set([color]),
        collector = new Set();
    do {
        processing = Array.from(queue)[0];
        findParent(processing).forEach(bag => {
            if(!collector.has(bag)){
                queue.add(bag); 
                collector.add(bag);
            }
        })
        queue.delete(processing)
    }
    while (queue.size > 0)
    return collector.size
}
console.log(rulecrawler("shiny gold"))
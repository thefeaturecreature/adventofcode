const aoc = require('../../lib/aoc.js');
const bagrules = inputfile('testinput.txt');

let collector = new Set(),
    bottom = new Set(),
    relationships = new Object();


const findChildren = color => {
    pregparent = new RegExp("^" + color,"g")
    parent = bagrules.find(rule => rule.match(pregparent));
    return parent.match(/contain (.*$)/)[1].split(', ');
}

const rulecrawler = color => {
    let queue = new Set([color]);
    do {
        processing = [...queue][0];
        a = findChildren(processing)
        .forEach(bag => {
            if(bag == "no other bags.") {
                bottom.add(processing);
            } else {
                bagcolor = bag.match(/([\d]+) (.*?) bag[s]?/)
                a = bagcolor[1];
                relationships[bagcolor[2]] = {};
                relationships[bagcolor[2]].parent = processing;
                relationships[bagcolor[2]].count = bagcolor[1];
                if(!collector.has(bagcolor[2])){
                    queue.add(bagcolor[2]); 
                    collector.add(bagcolor[2]);
                }
            }
        })
        queue.delete(processing)
    }
    while (queue.size > 0)
}

procbags = color => {
    rulecrawler(color)
    collector;
    bottom;
    relationships;
    return true;
}

console.log(procbags("shiny gold"))

//TODO: Unfinished
const aoc = require('../../lib/aoc.js');
const directions = inputfile('input.txt','single');

let collector = new Set,
    botx = 0,
    boty = 0,
    santax = 0,
    santay = 0;

const present = [...directions]
    .forEach((part, index) => {
        if(index % 2 == 0) {
            switch (part) {
                case '^': 
                    boty--;
                    break;
                case '>': 
                    botx++;
                    break;
                case 'v': 
                    boty++;
                    break;
                case '<': 
                    botx--;
                    break;
            }
        } else {
            switch (part) {
                case '^': 
                    santay--;
                    break;
                case '>': 
                    santax++;
                    break;
                case 'v': 
                    santay++;
                    break;
                case '<': 
                    santax--;
                    break;
            }
        }

        house = botx + "x" + boty;
        if(!collector.has(house)) {
            collector.add(house);
        }

        bothouse = santax + "x" + santay;
        if(!collector.has(bothouse)) {
            collector.add(bothouse);
        }
    });

console.log(collector.size);
// answer: 2639
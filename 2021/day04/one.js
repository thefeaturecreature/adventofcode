const { arrayBuffer } = require('stream/consumers');
const aoc = require('../../lib/aoc.js');
const numbers = inputfile('numbers.txt', false, ',').entries();
const boards = inputfile('boards.txt').filter(e => e.length !== 0).map(e=> e.trim().replace(/ $/,'').replace(/[\s]+/gm,',').replace(/$/,','));

var hboards = () => { 
    let hboards = [];
    for (var i = 0; i <= boards.length - 1; i+=5)  {
        hboards[i/5] = "," + boards[i].concat(boards[1+i]).concat(boards[2+i]).concat(boards[3+i]).concat(boards[4+i]);
    }
    return hboards
}

const testwin = currentboard => currentboard.match(/^(,x[\d]+){5}/gm) // First Row
    || currentboard.match(/^(,[x]?[\d]+){5}(,x[\d]+){5}/gm) //Second Row
    || currentboard.match(/^(,[x]?[\d]+){10}(,x[\d]+){5}/gm) // Third Row
    || currentboard.match(/^(,[x]?[\d]+){15}(,x[\d]+){5}/gm) // Fourth Row
    || currentboard.match(/^(,[x]?[\d]+){20}(,x[\d]+){5}/gm) // Fifth Row
    || currentboard.match(/(,x[\d]+)(,[x]?[\d]+){4}(,x[\d]+)(,[x]?[\d]+){4}(,x[\d]+)(,[x]?[\d]+){4}(,x[\d]+)(,[x]?[\d]+){4}(,x[\d]+)/) // Vertical Columns

const scoreboard = (theboard, called) => called * theboard.split(',').filter(e=>e!=='' && e.substring(0,1)!=='x').reduce((total,e) => parseInt(total) + parseInt(e))

const winboard = hboards => {
    let winner = false,
        score = 0;
    do {
        let e = numbers.next().value[1];

        hboards = hboards.map(f => {
            f = f.replace(','+e+',',',x'+e+',')
            wincheck = testwin(f);
            if(wincheck != null) {
                winner = true;
                score = scoreboard(f, e);
                console.log('score:',score);
            }
            return f
        })
    } while (!winner)
        
}

winboard(hboards())
//32844
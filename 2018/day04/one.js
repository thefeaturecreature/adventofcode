const aoc = require('../../lib/aoc.js');
const timestamps = inputfile('input.txt');
let currentguard = 0,
    guardsched = new Array(),
    sleepstart, 
    sleepend;

timestamps.sort()
    .forEach(log => {
    switch(log.substr(19,5)) {
        case 'Guard':  
            currentguard = log.match(/(?<=Guard #)([\d]+)/g);
            if(guardsched[currentguard] === undefined) guardsched[currentguard] = new Array()
            break;
        case 'falls':  
            sleepstart = parseInt(log.substr(15,2))
            break;
        case 'wakes':  
            sleepend = parseInt(log.substr(15,2))
            for (i = sleepstart; i < sleepend; i++) {
                if (guardsched[currentguard][i] === undefined) { 
                    guardsched[currentguard][i] = 1
                } else {
                    guardsched[currentguard][i]++
                }
            }
            break;
    }
})

let accum,
    sleephours = 0, 
    sleepdays = 0;
    sleepday = 0;

    topguard = 0,
    topsleephours = 0,
    topsleepdays = 0,
    topsleepday = 0,


guardsched.forEach((guard, index) =>{
    if(guard.length > 0) {
    sleephours = guard.reduce((accum,day) => accum + day)

    sleepdays = 0;
    sleepday = 0;

    guard.forEach((day, index) => {
        if(day > sleepdays) {
            sleepday = index;
            sleepdays = day;
        }
    
    });
    if(sleephours > topsleephours) {
        topsleephours = sleephours;
        topguard = index;
        topsleepday = sleepday;
        topsleepdays = sleepdays;
    }
}
})
console.log(topguard * topsleepday)
// Answer: 30630
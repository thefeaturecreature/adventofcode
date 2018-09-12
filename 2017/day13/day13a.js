const aoc = require('../lib/aoc.js');
const levels = inputfile('./day13.txt');
let totals = 0;

levels.split('\n');

let heartbeat = (size,ticks) => {
  let col = Math.trunc((ticks - 1) / (size - 1))
  let rem = ticks % size ;
  let maxind = size - 1;

  console.log('---')  
  console.log(`Tick: ${ticks}`)
  console.log(`Col: ${col}`)
  console.log(`Rem: ${rem}`)

  if(col == 0) return rem;
  if(col % 2 == 0) {
   // return rem;
  } else {
    return (maxind - 1 - rem)
  }
}
let s2 = 4
let ender = 15
for(i=0;i<ender;i++){
  console.log(`Heartbeat: ${heartbeat(s2,i)}`)
}

/*
set total 0

for {set x 0} {$x < [llength $levels]} {incr x} {
  set level [lindex $levels $x]
  set step [lindex [split $level ":"] 0]
  set height [string trim [lindex [split $level ":"] 1]]
  set full [expr {(2 * $height) - 2}]
  if {$step > $full} {
    set remstep [expr {$step % $full}]
  } else {
    set remstep $step
  }
  if {$remstep >= $height} {
      set round [expr {($height - 1) - ($remstep - ($height - 1))}]
    } else {
      set round $remstep
    }
  if {$round == 0} {
    incr total [expr {$height * $step}]
  }
}
puts $total
*/
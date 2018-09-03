// aoc.js
module.exports = {
	inputfile: (inputfile, newline = false) => {
		fs = require('fs')
    output = fs.readFileSync(inputfile, 'utf8')
		return (newline)? output.split('\n') : output
	},

  allcompare: (input, callback) => {
    input.forEach((wordA, indexA) => {
      input.forEach((wordB, indexB) => 
        callback(wordA, wordB, indexA, indexB))
    })
  },
}

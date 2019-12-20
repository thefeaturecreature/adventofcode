const aoc = require('../lib/aoc.js');
const pixels = inputfile('./day08.txt', false);

String.prototype.sliceEvery=function(c) { 
    splitter = [];
    layersize = this.length/c;
    for(i=0;i<this.length;i+=layersize){
        splitter.push(this.slice(i,i+layersize))
    }
    return splitter
};

findpixels = (arr,pix) => {
    let pixmatch = {
        zero:arr.length
    }
    arr.sliceEvery(pix).forEach((slice,inx) => {
        // console.log('--------------------------------')
        // console.log('index:',inx)
        // console.log('0:',slice.count('0') - 1)
        // console.log('1:',Number(slice.count('1')) - 1)
        // console.log('2:',Number(slice.count('2')) - 1)
        // console.log('1*2:',(Number(slice.count('1')) - 1)*(Number(slice.count('2')) - 1))
    if(slice.count('0') < pixmatch.zero) {
            pixmatch.zero = slice.count('0') - 1;
            pixmatch.layer = inx;
            pixmatch.one = Number(slice.count('1')) - 1
            pixmatch.two = Number(slice.count('2')) - 1
            pixmatch.onetwo = pixmatch.one * pixmatch.two
            pixmatch.checksum = (slice.length - (pixmatch.zero + pixmatch.one + pixmatch.two) == 0)
            pixmatch.content = slice;
        }
        // console.log('pm: ',pixmatch.zero,'onetwo',pixmatch.onetwo)
        // console.log(slice)
    })
    return pixmatch.onetwo // pixmatch.onetwo
}
console.log(findpixels(pixels,6))

//const testpixels = '123456789012';
//console.log(findpixels(testpixels,2))


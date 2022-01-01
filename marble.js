// idea from https://wiki.xxiivv.com/#death

// Following John Maxwell's [Jars of Marbles](http://www.johnmaxwell.com/blog/dont-lose-your-marbles), 
// which says that "The average person lives about 75 years, of 52 weeks each, 
// totalling 3,900 Saturdays which the average person has in their lifetime."

const fs = require('fs')

// put your birthday as input
let y = 1993
let m = 4
let d = 26

const currentMarble = () => {
    return Math.floor((Date.now()-new Date(y, m, d))/1000/3600/24/7)
}
const marblesLeft = () => {
    let marbleLeft = (3900-currentMarble())/3900 * 100
    let rounded = Number.parseFloat(marbleLeft).toFixed(2)
    return rounded;
}

let text = `
    Current marble: #${currentMarble()} [${new Date(Date.now())}]
    Marble Jar: ${marblesLeft()}% left
`

console.log(text);

// write file as marbles.txt
fs.writeFile('./marble.txt', text, 'utf8', function (err) {
    if (err) return console.log(err);
    console.log('marble sucessfully saved!');
});
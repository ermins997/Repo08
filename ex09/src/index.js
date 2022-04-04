function randomInteger(){
var rand = Math.floor(Math.random() * 30);

return rand;
}

console.log(randomInteger());

module.exports = randomInteger;
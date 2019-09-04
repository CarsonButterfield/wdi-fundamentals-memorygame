const cards = ["king","king","queen","queen"];
var cardsInPlay = [];
var cardOne = cards[0]
var cardTwo = cards[1]
cardsInPlay.push(cardOne)
cardsInPlay.push(cardTwo)
console.log(`user flipped ${cardOne} and ${cardTwo}`)

if(cardOne === cardTwo){
  alert('Its a match!')
}
else{alert("wrong, idiot")}

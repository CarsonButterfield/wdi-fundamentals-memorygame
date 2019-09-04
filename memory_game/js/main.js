const cards = ["king","king","queen","queen"];
var cardsInPlay = [];


function checkMatch(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert('Its a match!')
  }
  else{alert("wrong, idiot")}
cardsInPlay = []}
function flipCard(cardid){
  cardsInPlay.push(cards[cardid])
  console.log(`user flipped ${cards[cardid]}`)
if(cardsInPlay.length === 2){checkMatch()}
}
flipCard(0)
flipCard(2)

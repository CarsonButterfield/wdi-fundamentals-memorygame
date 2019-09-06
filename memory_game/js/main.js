const cards = [
  {
    rank:"king",
    suit:"hearts",
    cardImage:"images/king-of-hearts.png"
},{
  rank:"king",
  suit:"diamonds",
  cardImage:"images/king-of-diamonds.png"
},{
  rank:"queen",
  suit:"hearts",
  cardImage:"images/queen-of-hearts.png"
},{
  rank:"queen",
  suit:"diamonds",
  cardImage:"images/queen-of-diamonds.png"
}];
var cardsInPlay = [];


function checkMatch(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert('Its a match!')
  }
  else{alert("wrong, idiot")}
cardsInPlay = []}
function flipCard(cardid){
  cardsInPlay.push(cards[cardid].rank)
  console.log(`user flipped ${cards[cardid].rank} of ${cards[cardid].suit} ${cards[cardid].cardImage}`)
if(cardsInPlay.length === 2){checkMatch()}
}
flipCard(0)
flipCard(2)

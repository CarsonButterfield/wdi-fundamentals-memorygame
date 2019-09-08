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
function flipCard(){
  let thisCardId = this.getAttribute('data-id');
  console.log(thisCardId)
  cardsInPlay.push(cards[thisCardId].rank)
  console.log(`user flipped ${cards[thisCardId].rank} of ${cards[thisCardId].suit} ${cards[thisCardId].cardImage}`)
  this.setAttribute("src",cards[thisCardId].cardImage)
if(cardsInPlay.length === 2){checkMatch()}
}
function createBoard(){
for (var i = 0; i < cards.length; i++) {

  var newListItem = document.createElement('img');
  newListItem.setAttribute("src","images/back.png")
  newListItem.setAttribute("data-id",i)
  newListItem.addEventListener("click",flipCard )
  document.getElementById("game-board").appendChild(newListItem)
}}
createBoard()

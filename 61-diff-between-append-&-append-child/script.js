let container=document.querySelector('.container')
let card=document.querySelector('.card')
let h1=document.querySelector('h1')

// container.appendChild(h1.cloneNode(true))
// const newCard=card.cloneNode()
// task:- create 99 cards from single card. card-2 to card-100 should create in container with for loop.
function completeHundredCards(){
for (let i = 2; i <= 100; i++) {
const newCard=card.cloneNode()
newCard.innerText=i
container.appendChild(newCard)
// false combiner cpproach
// const newCard=card.cloneNode().innerText=i
// newCard.innerText=i
// container.appendChild(card.cloneNode().innerText=i)
}

}

completeHundredCards()
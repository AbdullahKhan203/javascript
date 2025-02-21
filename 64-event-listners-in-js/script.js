const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

function sayHi() {
    console.log('Hiiiii');
}

function secondSayHi() {
    console.log('Second Hi');
}

// h1.onclick = sayHi
// h1.onclick = secondSayHi


// card.addEventListener('click', () => {  
//     sayHi() 
// })
//    card.addEventListener('click', () => {  
//     secondSayHi() 
// })


// task:-create many card with their unique numbers by click on plus sign card.

let num=1;
function addCard(){
    // first way
    // let copyCard=card.cloneNode()
    //  copyCard.innerText=num;
    //  num++;

    // console.log(copyCard)
    // container.append(copyCard)
    // second way
    // let newCard=document.createElement('div')
    // console.log(newCard)
    // newCard.classList.add("card")
    // newCard.innerText=num;
    // num++;
    // container.appendChild(newCard)
    // third method
    let newCard=document.createElement('div')
    console.log(newCard)
    newCard.classList.add("card-two")
    // this is because first num value assing then number would be ncrement.
    newCard.innerText=num++;
     container.appendChild(newCard)
    


}
card.addEventListener("click",addCard)
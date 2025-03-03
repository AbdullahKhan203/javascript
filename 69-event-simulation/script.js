const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})



// let intervalId=setInterval(()=>{
//     if(count>=51){
//         // count++;
//         clearInterval(intervalId)
//     }
//     addCardBtn.click()
// },1)

// setTimeout(()=>{
//     input.focus()
// console.log("input focused");

// },2000)
// setTimeout(()=>{
//     input.blur()
//     console.log("input blured");
// },4000)


// setTimeout(()=>{
//    form.submit()
//     console.log("foorm submitted");
// },4000)

// form.submit()

// note:- for can submit without button





const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')
const cardList=document.querySelectorAll('.card')
// console.log(cardList)
let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    // first approach
    // newCard.addEventListener('click',()=>{
    //     newCard.remove();
    // })
    container.append(newCard)
    
   
})
// second approach
container.addEventListener('click',(e)=>{
    console.log("e.target",e.target);
    // e.target.remove();
    if(e.target!==container){
       e.target.remove()
    }
    
})



// cardList.forEach((card)=>{
//     console.log(card);
//     card.addEventListener('click',()=>{
//         card.remove();
//     })
    
// })








// notes:-
// Alright! Here’s a complete and crystal-clear conclusion for your notes:  

// ---

// **Understanding Container Behavior, Absolute Positioning, and Document Flow:**  

// 1. **Why the container’s empty space wasn’t clickable earlier:**  
//    - By default, an element’s height and width only depend on its content. If a container like `.container` has no content (like cards), it **collapses** and takes up no visible space.  
//    - The `+` button (`.add-card`) **looks like it’s inside the container in HTML**, but because it uses `position: absolute`, it’s **removed from the normal document flow** and positioned independently.  
//    - Since `.container` had no height, and the `+` button wasn’t part of its flow, the container visually **“disappeared”** until content was added — making clicks on the “empty space” seem like they weren’t hitting the container at all.  

// 2. **Why giving a fixed height and width fixed it:**  
//    - Adding `height: 50vh;` and `width: 100%;` forced the `.container` to **always take up visible space**, even when empty. This created clickable empty space inside it.  

// 3. **Why the `+` button seemed visually “outside” the container:**  
//    - `position: absolute` **removes an element from the document flow**, so it no longer affects the size or position of its parent container.  
//    - An absolutely positioned element positions itself **relative to the nearest positioned ancestor** — an element with `position: relative`, `absolute`, `fixed`, or `sticky`.  
//    - By default, **all elements have `position: static`**. Because `.container` didn’t have any non-static positioning, the `+` button positioned itself relative to the **`<body>`** instead — even though it’s inside `.container` in the HTML structure.  
   
// 4. **How we fixed the button’s positioning:**  
//    - By adding `position: relative;` to `.container`, we made it the **nearest positioned ancestor** for `.add-card`, keeping the `+` button anchored inside the container’s boundaries.  

// ---

// **Key Takeaways:**  
// - **`position: static` is the default for all elements**, which means they stay in the normal document flow and **can’t act as positioned ancestors**.  
// - **`position: absolute` removes an element from the flow** and positions it relative to the **nearest non-static ancestor**. If there’s no non-static ancestor, it **positions itself relative to `<body>`**.  
// - **Empty containers collapse** unless given fixed dimensions or visible content — which is why `.container` seemed invisible until we gave it a height and width.  
// - Using `position: relative;` on a container keeps absolutely positioned child elements **anchored inside it**, rather than drifting outside the visible area.  

// ---

// This way, you’ve got everything we discussed in one tidy and easy-to-remember conclusion! Let me know if you’d like me to add anything or dig into something else. 🚀✨  
let userNameInput=document.querySelector('#username');
let form=document.querySelector('form');
// console.log(userNameInput)
// userNameInput.addEventListener('click',()=>{
//     console.log("single clicked");
    
// })
// userNameInput.addEventListener('dblclick',()=>{
//     console.log('double click')
// })

// input event fired when we does any change input field like typing.
// userNameInput.addEventListener('input',(e)=>{
//     console.log(e)
// })
// change event is fire when we exit from input field after typing.especially when exit from input fiedld after change some thing in input field(when we blur input field).
// userNameInput.addEventListener('change',(e)=>{
//     console.log(e)
// })

// focus event is fired when we enter in input
// userNameInput.addEventListener('focus',(e)=>{
//     console.log("focused event",e)
//     // console.log("focused event")
// })
// // focus event is fired when we exit from input
// userNameInput.addEventListener('blur',(e)=>{
//     console.log("blurred event",e)
// })


form.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(e.target);
    console.log(e.currentTarget);
    
    // console.log('submit')
})








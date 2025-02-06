// let selecor=document.getElementsByClassName('myName')
// selecor[0].innerText=localStorage.myName



let selecor=document.querySelector('.myName')
// selecor.innerText=localStorage.getItem('myName')
let inputElem=document.querySelector(".nameinp")
let ageElem=document.querySelector(".age")
let ageTag=document.querySelector(".age-tag")



// inputElem.addEventListener('input',(e)=>{
//     console.log(e.target.value);
//     // localStorage.myName=e.target.value
//     localStorage.setItem('myName',e.target.value);
//     selecor.innerHTML=localStorage.getItem('myName')
    
    
// })
// ageElem.addEventListener('input',(e)=>{
//     console.log(e.target.value);
//     // localStorage.myName=e.target.value
//     localStorage.setItem('myAge',e.target.value);
//     ageTag.innerHTML=localStorage.getItem('myAge')
    
    
// })


let myData=JSON.parse(localStorage.getItem("myData"))  || {}
// if nothing inn localstorage then ```JSON.parse(localStorage.getItem("myData"))``` would give null 
inputElem.addEventListener('input',(e)=>{
       myData.name=e.target.value;
       localStorage.setItem("myData",JSON.stringify(myData))
})
ageElem.addEventListener('input',(e)=>{
       myData.age=e.target.value;
       localStorage.setItem("myData",JSON.stringify(myData))
})

// fetching data from local storage.
if(myData.name){
    selecor.innerHTML=myData.name
}
if(myData.age){
ageTag.innerHTML=myData.age
}

// note:-for clearn whole local storage data we would use localStorage.clear().and single item localstorage.removeItem('myData').




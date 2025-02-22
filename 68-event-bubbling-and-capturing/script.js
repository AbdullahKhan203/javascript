let green=document.querySelector('.green')
let red=document.querySelector('.red')
let blue=document.querySelector('.blue')



window.addEventListener('click',()=>{
    console.log('window is clieked');
    
},true)
document.addEventListener('click',()=>{
    console.log('document is clieked');
    
},true)
document.body.addEventListener('click',()=>{
    console.log('body is clieked');
    
})
green.addEventListener('click',()=>{
    console.log('green is clieked');
    
})
red.addEventListener('click',()=>{
    console.log('red is clieked');
    
})
blue.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('blue is clieked');
    
})


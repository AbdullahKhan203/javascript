const container=document.querySelector('.container')
// const img=document.querySelector('img')
// for(let i=2;i<=100;i++){
//     const newImage=img.cloneNode()
//     // newImage.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     newImage.attributes[0].nodeValue=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.appendChild(newImage)   
// }




const p=document.createElement('P');
//    p.innerText="This is paragraph";
//    p.style.backgroundColor="red";
//    p.classList.add('my-name')
//    p.id='myId'
// container.append(p)

let image=document.createElement('img')
// image.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
// image.height=100
// container.append(image)


// for(let i=1;i<=50;i++){
//     let newImage=image.cloneNode()
//     console.log(newImage)
//     newImage.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newImage)
//     container.append(i)
// }

// creation of new div
// let newDiv=document.createElement('div')
// console.log("newDiv",newDiv)
// newDiv.style.height="200px"
// newDiv.style.width="200px"
// newDiv.style.display='flex';
// newDiv.style.flexDirection='column';
// newDiv.style.alignItems="center";
// newDiv.style.justifyContent="center";
// // newDiv.style.borderWidth="2";
// // newDiv.style.borderStyle="solid"
// // newDiv.style.borderColor="red";
// newDiv.style.border = "2px solid red";
// // newDiv.innerText="I am new Div"
   
// for(let i=1;i<=50;i++){
//     let sampleDiv=newDiv.cloneNode(true);
//     container.appendChild(sampleDiv)
//     let newImage=image.cloneNode()
//     newImage.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//         sampleDiv.append(newImage)
//         sampleDiv.append(i)
// }



let html=``;
for (let i = 1; i < 1000; i++) {
//    let imgContainer=document.createElement('div')
// imgContainer.classList.add('img-container')
// let newImg=document.createElement('img')
//  newImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//  let para=document.createElement('p')
//  para.innerText=i;
//  imgContainer.append(newImg,para)
// container.append(imgContainer)
// another small way of commented code
// let HTML=`
//  <img  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
//     <p>${i}</p>
// `
// imgContainer.innerHTML=HTML
// container.appendChild(imgContainer)

// professionalWay
// let html=``; shoudl run outside of loop
let innerContainer=`
<div class="img-container">
    <img  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
    <p>${i}</p>
   </div>
`
html+=innerContainer;



}
// this process also inclue in professionalWay
container.innerHTML=html;

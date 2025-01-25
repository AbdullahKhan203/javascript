// const allImages=document.getElementsByTagName('img')
// console.log(allImages)
// // othr method
// console.log(document.images)

// // Select the third <li> element that is a child of any <ul> element
// const thirdListItem = document.querySelectorAll('ul li:nth-child(3)');

// // Iterate over the NodeList and do something with each selected <li> element
// thirdListItem.forEach(item => {
//     console.log(item);
// });

// // we can also excessa any element like this.
// let jsImage=document.querySelector('[src="js.png"]')




const imagesUrl=[
      'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
      'https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?cs=srgb&dl=pexels-pixabay-36478.jpg&fm=jpg',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70',
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBwocu7MWpkA9rzXNWm8R9zdLwJaR1RmiFcaXx-ccSzgPBLQogiKm85Bn45gvhrlJFXg&usqp=CAU'
];


const allImages=document.querySelectorAll('img')
 console.log("allImages",allImages) // if it is in HTMLCollection then best practice is first we should convert it into array first by array.from() or spread it into like [...allImages]
allImages[0].src=imagesUrl[0];
allImages[1].src=imagesUrl[1];
allImages[2].src=imagesUrl[2];


for(let i=0;i<allImages.length;i++){
   allImages[i].src=imagesUrl[i]
}


imagesUrl.forEach((img,i)=>{
   console.log(img,i)
   allImages[i].src=img
})


// allImages.forEach((img,i)=>{
//    // console.log(img,i)
//    img.src=imagesUrl[i]
// })







// We can also add query selector in particular element instead of document.querySelector 

const ul=document.querySelector("ul")
console.log("ul",ul)
console.log(ul.querySelector("ol"))



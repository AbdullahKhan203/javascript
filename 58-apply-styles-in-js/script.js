
let anchorTags=document.querySelectorAll('a')
console.log(anchorTags);

for(let x of anchorTags){
//    x.style.color="teal"
//    x.style.textDecoration="none"
//    x.style.fontWeight="700"
//    x.style.fontFamily="cursive"
// above is true but lengthy approach
// The x.style.cssText property is used to get or set the entire inline style of an HTML element as a single string.we write like same in inline-style not in js like camelCase textDecoration. 
// console.log(x.style.cssText);
// x.style.cssText=`color:teal;
// text-decoration:none;
// font-weight:700
// `
// thie way change the Dom element,not html,css file.only the dom element which is displaying in element section.but this is alos not better way.
// better way we create a  class green link in css filer.
// x.className='green-link wavy-link'  //or
// x.setAttribute("class","green-link")
// but htis method not good for multiple classes.this is good for adding single class if element has not class attribute.
// method for adding class is:-
// console.log(x.classList)
 x.classList.add('green-link')
 x.classList.add('wavy-link')
//  toggle means if element has class then class will remove and if not have then class will be added.
 x.classList.toggle('wavy-link')

}
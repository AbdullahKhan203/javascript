let colors=["red","green","blue","black","orange"]
// for descrutrunging element from array
// let [color1,color2]=colors
// anoterh way to desrututre
// let [,,color3]=colors
// anoterh way to desrututre
let {3:colors3}=colors


let obj1={
    name:"khan",
    age:25,
    address:{
        city:"Islamabad",
        state:"Punjab"
    }
}

// destructuring of property of object
// const {name,age,address}=obj1
// if we want to receive name with property with username
const {name:username,age:userage,address}=obj1
// for destructuring inner object's property
const {address:{city,state}}=obj1


// function userObject(userObj){
// destructuring properties
// function userObject({name,age}){
// destructuring nested object
function userObject({address:{city,state}}){
   console.log(city,state);
   
}
userObject(obj1)

// in case of array
// function printColors([color1,,,color4]){
// function printColors({1:color1,4:color4}){
//    console.log(color1,color4);
   
// }
// printColors(colors)


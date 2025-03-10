// let fruits=["apple","banana","orange"]
// let newFruits=fruits;  //now both point same address. 
// newFruits.push("mango")
// newFruits.push("grapes")  // both point same address so both array would be changed.
// console.log(fruits);
// // newFruits=["apple","banana","orange","mango","orange"]


// let obj1={
//     name:"ali",
//     age:25,
// }
// let obj2=obj1
// obj2.fatherName="fiaz"
// console.log("obj2",obj2);
// console.log("obj1",obj1);


let variable1="haider"
let variable2=variable1;  // both variable1 and variable2 has same system context and string "haider" has same address.

 
variable2=variable1+"khan"  //now  both variable1 and variable2 has same system context but "haider" and "haiderkhan" have diffrent address store in variable1 and variable2 respectively.
// console.log("variable1",variable1);
console.log("variable2",variable2);


let namesone=["ali","ahmad","hassan",{name:"ali"}]
let namestwo=[...namesone]  //shallow copy copy till level one,not work onn nested object.

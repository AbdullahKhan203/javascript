// const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];



// for(const fruit of fruits){
//     // debugger
//     console.log(fruit);
    
// }
// console.log("outside",fruit);



const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    city: 'Bangalore',
}

for(const key in person){
    // debugger
    console.log(key);   
}



let keysOfPerson=Object.keys(person)
console.log(keysOfPerson)

for(let key of keysOfPerson){
    console.log(person[key])
}
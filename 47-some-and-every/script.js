    // let arr=[0,2,4,6,8,3,10]


// console.log(arr.some((elem)=>{
//   return elem
// }))
// console.log(arr.some((elem,i)=>{
//     if(elem%2==1){
//         console.log(arr[i]) 
//         // return;
//     }
//    return elem%2==1
// }))

let arr=[1,3,5,7,9,10]
console.log(arr.every((elem,i)=>{
    if(elem%2==1){
        console.log(arr[i]) 
        // return;
    }
   return elem%2==1
}))






let nums1=[1,2,3,4]
let nums2=[5,6,7,8]

// ways to combine
let concatedArr=nums1.concat(nums2)
console.log("concatedArr",concatedArr);

// another way
let nums3=[...nums1,...nums2]
console.log("nums3",nums3);
// spread string in array
let str="khan";
let nums4=[...nums1,...nums2,...str]
console.log("nums4",nums4);



let user={
    name:"ali",
    age:25,
}
let copyUser={...user,extraproperty:"extraproperty"}
console.log(copyUser);


let nums=[1,2,3,4,5,6,7,8,9,10]
function addArguments(){
    console.log(arguments);
    
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }

    console.log(sum);
    

}

addArguments(...nums)
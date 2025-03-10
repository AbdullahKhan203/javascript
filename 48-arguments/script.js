function add(){
    console.log(arguments);
    let sum=0;
    let i=0;
    while(typeof arguments[i]== "number"){
       sum+=arguments[i]
       i++;
    }
    console.log("sum is",sum)   
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    // console.log(arguments[2]);
    // console.log(arguments[3]);
}



// task:-get parameters with arguments and add them with reduce method.
function task(){
console.log(arguments);
let arr=[...arguments]

let addResultWithReduce=arr.reduce((Element,accum)=>
    {
        console.log(Element,accum);
        
        return accum+Element
},0)
console.log(addResultWithReduce);


}

task(1,2,3,4)
const nums1 = [1, 2, 3, 4]

function add(...nums) {
    console.log(nums);
    // let sum = 0
    // for(let i = 0; i < arguments.length; i++) {
    //     sum = sum + arguments[i]
    // }
    let sum =nums.reduce((acc,elem)=>{
     console.log(acc);
    return acc+elem})
    console.log(sum);
    
    return sum
}

add(...nums1)

// working of functions reduce method in detail satrt
// const nums1 = [1, 2, 3, 4];

// function add(...nums) {
//     console.log(nums);

    // Using reduce method to sum up the elements of the array
    // reduce takes a callback function with two parameters:
    // acc -> accumulator, which stores the result of previous calculations
    // elem -> current element being processed

    // let sum = nums.reduce((acc, elem) => {
    //     // Logging the current state of accumulator before addition
    //     console.log('Accumulator before addition:', acc);
    //     console.log('Current element:', elem);

        // Adding current element to the accumulator
        // const newAcc = acc + elem;
        
        // Logging the updated accumulator after addition
        // console.log('Accumulator after addition:', newAcc);

        // Returning the updated accumulator for the next iteration
        // return newAcc;
    // });

    // Final sum after reduce completes
    // console.log('Final sum:', sum);
    // return sum;
// }

// Calling the add function with the spread array
// add(...nums1);

/*
Detailed working of reduce:
Iteration 1:
    acc = 1 (first element)
    elem = 2 (second element)
    newAcc = 1 + 2 = 3

Iteration 2:
    acc = 3
    elem = 3 (third element)
    newAcc = 3 + 3 = 6

Iteration 3:
    acc = 6
    elem = 4 (fourth element)
    newAcc = 6 + 4 = 10

Final Result:
    sum = 10
*/

// working of functions reduce method in detail end

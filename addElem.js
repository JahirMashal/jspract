// Problem 7
// Write a python function to add two more specified elements into a JavaScript array
// Sample addTwoElements([1,2,3],4,6) => [1,2,3,4,6]; addTwoElements([],1,1) => [1,1]


function addTwoElements(input, elem_1, elem_2){
    input.push(elem_1, elem_2)
    return input
}


console.log(addTwoElements([1,2,3],4,6));
console.log(addTwoElements([], 1, 1));
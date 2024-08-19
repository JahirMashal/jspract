// Problem 5
// Write a python function to swap the first and last elements of a given array of integers. If array length < 2 return 'error'
// Sample swapFirstLast([1,3,9,5]) => [5,3,9,1]; swapFirstLast([1]) => 'error'; swapFirstLast([1,3]) => [3,1]


function  swapFirstLast(input) {
    if (input.length < 2) {
        return 'error';
    }
    let temp = input[0];
    input[0] = input[input.length - 1];
    input[input.length - 1] = temp;
    return input;
}

console.log(swapFirstLast([1, 3, 9, 5])); 
console.log(swapFirstLast([1]));          
console.log(swapFirstLast([1, 3]));       


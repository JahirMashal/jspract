// Problem 3
// Write a javascript function to check whether a given positive number is a multiple of 3 or a multiple of 7.
// Sample: multOfSevenOrThree(5) => False; multOfSevenOrThree(14) => True; multOfSevenOrThree(9) => True;
function multOfSevenOrThree(number){
    // const mlp = prompt();



    if(number % 3 ===0  || number % 7 ===0 ){
        return true;
        
    }
    else{
        return false;
    }

}


console.log(multOfSevenOrThree(5));
console.log(multOfSevenOrThree(14));
console.log(multOfSevenOrThree(9));
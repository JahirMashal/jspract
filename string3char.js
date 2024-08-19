// Problem 4
// Write a javascript function to create new string with first 3 characters are in lower case from a given string and all characters post that is upper case. If the string length is less than 3 convert all the characters in upper case
// Sample firstThreeLower('SujeetPillai') => 'sujEETPILLAI'; firstThreeLower('Suj') => 'suj'; firstThreeLower('Su') =>'SU';


function firstThreeLower(){
    const input_string = prompt();

    // const input_string = "Sujeetpillai";
    
    if(input_string.length < 3){
        return input_string.toUpperCase();
    }
    else{
        const newString = input_string.slice(0,3).toLowerCase() + input_string.slice(3, input_string.length).toUpperCase();
        return newString;
    }

}

console.log(firstThreeLower());
console.log(firstThreeLower());
console.log(firstThreeLower())
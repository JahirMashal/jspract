// Problem 2
// Write a javascript function to remove the character at the specified position of a given string and return the new string
// Sample: removeCharacterAtPoint('SujeetPillai',3) => 'SujetPillai'


function removeCharacterAtPoint(){

    // const input_string = prompt();
    const input_string = "Sujeetpillai";
    const newString = input_string.slice(0,3) + input_string.slice(4, input_string.length)
    return newString;
}

console.log(removeCharacterAtPoint());

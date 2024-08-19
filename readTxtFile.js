// Problem 13
// Write a python function to read the 'sample.txt' file and make a list of every word in that file
// Then create a dictionary with every word in the file as the key and the number of times it is repeated in the file as value.
// Only pure words should be there. Ensure no punctuation is concatenated with the word. Also the count should be case-insensitive
// Eg. "Sujeet", "Sujeet.","sujeet","sujeet?","SUJEET" should all be counted as the same word "sujeet"
// Eg. output should be a dictionary {'sit':35,'lorem':2} etc.



const fs = require('fs');

function getUniqueWordCounts() {
  try {
    
    const data = fs.readFileSync('sample.txt', 'utf8');
    
    
    const normalizedData = data
      .toLowerCase()
      .replace(/[.,?!;:"'(){}[\]]/g, '');


    const words = normalizedData.split(/\s+/);

    
    const wordCount = {};

    
    words.forEach(word => {
      if (word) { 
        if (wordCount[word]) {
          wordCount[word]++;
        } else {
          wordCount[word] = 1;
        }
      }
    });

    return wordCount;
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
}

console.log(getUniqueWordCounts());


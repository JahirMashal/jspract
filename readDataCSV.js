// Problem 11
// Write a javascript function to read data from the csv file named "MOCK_DATA.csv".
// Drop the field with name ip_address from all records
// Then filter the read data for gender='Female'.
// Then write the filtered data into a json file called 'output.json'
// NOTE: Use the csv library and DictReader class



const fs = require('fs');
const csv = require('csv-parser');

const results = [];

// Read the CSV file
fs.createReadStream('MOCK_DATA.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Remove the ip_address field
    delete row.ip_address;
    
    // Filter records where gender is 'Female'
    if (row.gender === 'Female') {
      results.push(row);
    }
  })
  .on('end', () => {
    // Write the filtered data to a JSON file
    fs.writeFile('output.json', JSON.stringify(results, null, 2), (err) => {
      if (err) {
        console.error('Error writing to output.json:', err);
      } else {
        console.log('Data successfully written to output.json');
      }
    });
  });

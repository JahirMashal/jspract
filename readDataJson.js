// Problem 10
// Write a javascript function to read data from the json file named "MOCK_DATA.json".
// Then filter the read data for gender='Male'.
// Then create a new field in each record dictionary named full_name which is the concatenation of first_name,' ',last_name
// return this list with the modified dictionaries
// NOTE: Use the json library



async function readJson() {
    try {
        
        const response = await fetch('MOCK_DATA.json');
        
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        
        const data = await response.json();

        
        const maleData = data.filter(item => item.gender === 'Male');

        
        const modifiedData = maleData.map(item => ({
            ...item,
            full_name: `${item.first_name} ${item.last_name}`
        }));

        return modifiedData;
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}


readJson().then(result => console.log(result));

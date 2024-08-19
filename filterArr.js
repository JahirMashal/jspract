// Problem 9
// Write a javascript function to filter an array or objects based on a field value provided
// Sample filterBySpeed([{speed:'fast',name:'Alice'},{speed:'medium',name:'Sam'},{speed:'slow',name:'Matt'},{speed:'medium',name:'Randy'}],'medium') => [{speed:'medium',name:'Sam'},{speed:'medium',name:'Randy'}]


function filterBySpeed(input, speed) {
    return input.filter(item => item.speed === speed);
}


console.log(filterBySpeed(
    [
        {speed: 'fast', name: 'Alice'}, 
        {speed: 'medium', name: 'Sam'}, 
        {speed: 'slow', name: 'Matt'}, 
        {speed: 'medium', name: 'Randy'}
    ], 
    'medium'
));


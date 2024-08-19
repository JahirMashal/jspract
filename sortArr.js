// Problem 8
// Write a python function to sort an array of objects based on the field name provided
// Sample sortByElem([{cost:1200,speed:100},{cost:1500,speed:300},{cost:2000,speed:175}],'speed') => [{cost:1200,speed:100},{cost:2000,speed:175},{cost:1500,speed:300}]
// Sample sortByElem([{weight:12,heigh:15},{weight:95,height:20},{weight:9,height:7}],'weight') => [{weight:9,height:7},{weight:12,heigh:15},{weight:95,height:20}]


function sortByElem(input, field) {
    return input.sort((a, b) => a[field] - b[field]);
}


console.log(sortByElem(
    [{cost: 1200, speed: 100}, {cost: 1500, speed: 300}, {cost: 2000, speed: 175}], 
    'speed'
));


console.log(sortByElem(
    [{weight: 12, height: 15}, {weight: 95, height: 20}, {weight: 9, height: 7}], 
    'weight'
));


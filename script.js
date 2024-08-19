// Problem 1
// Write a python function to return the current day and AM/PM in the following format
// Sample output if time is AM -> Today is Wednesday and it's before noon
// Sample output if time is PM -> Today is Wednesday and it's past noon


function whatsTheTime () {
    const today = new Date();
        // console.log(today);
        

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[today.getDay()];

    const hour = today.getHours();

        
    if (hour < 12) {
        return `Today is ${dayName} and it's before noon`;
    } else {
        return `Today is ${dayName} and it's past noon`;
    }

}
console.log(whatsTheTime());



// // function whatsTheTime () {

// // const Days = new Date();
// // const currentDate = new Date().toLocaleTimeString("en-US");
// // const currentTime = new 

// // const currentDayOfMonth = currentDate.getDate();
// // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// // const currentDayOfWeek = days[Days.getDay()];
// // console.log(currentDayOfWeek);

// // const CurrentMonth = Day.getMonth();
// // const currentYear = Day.getFullYear();
// // // const currentDay = Day.getDay();
// // const Hours = Day.getHours();



// // if (Hours >= 12) {
// //     console.log(`Today is ${currentDayOfWeek} and it's before noon`);
// // }
// // else {
// //     console.log(`Today is ${currentDayOfWeek} and it's past noon`);
    
// // }

// // console.log(`Today is ${currentDate} and it's before noon`);

// // }
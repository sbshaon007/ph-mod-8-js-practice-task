// Task 13: Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).


const month = 9;

if (month === 1 || month === 2 || month === 3 || month === 4) {

    console.log("Winter");

}

else if (month === 5 || month === 6 || month === 7 || month === 8) {

    console.log("Summer");

}

else if(month === 9 || month === 10 || month === 11 || month === 12) {

    console.log("Monsoon");

}

else {

    console.log("Invalid month");
}
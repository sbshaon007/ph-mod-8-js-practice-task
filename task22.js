// Task 22: 

/* Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — */
/* combine everything from this module (comparison, logical operators, if-else, ternary). */


const username = "username";
const password = "password123";
const isAdmin = true;

const correctUsername = "username";
const correctPassword = "password123";

if(username === correctUsername && password === correctPassword){

    if(isAdmin === true){

        console.log("Admin Dashboard");


    }

    else{

        console.log("User Dashboard")
    }
   

}

else {

    console.log("Incorrect Credentials. Please try to login again");

}

// Ternary operators

const loginMessage = username === correctUsername && password === correctPassword ? isAdmin ?

"Welcome Admin to your dashboard" : "Welcome User to your dashboard" : "Incorrect Username or Password";

console.log(loginMessage);
// Task 21:
// Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; 
// if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

const cartTotal = 999;
const isMember = false;
const discountAmount20 = (cartTotal*20)/100;
const discountAmount10 = (cartTotal*10)/100;
const grandTotalMember = cartTotal - discountAmount20;
const grandTotalNormal = cartTotal - discountAmount10;

if (cartTotal > 1000 && isMember === true) {

    console.log(grandTotalMember);
    
} 

else if(cartTotal>1000 && isMember === false) {
    
    console.log(grandTotalNormal);
}

else {

    console.log(cartTotal);
}
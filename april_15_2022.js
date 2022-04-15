


// Below is the js code for Question 1,2,3: 

const balance = 50;
let amountToBeMoved;
let total;
let optionSelected = prompt("Please type one of the following: Deposit Money OR Withdraw Money");

if (optionSelected == "Deposit Money" || "deposit money") {
    amountToBeMoved = Number(prompt("How much would you like to deposit?"));
    total = balance + amountToBeMoved;
    alert(`Your new balance is: ${total}`);

} else if (optionSelected == "Withdraw Money" || "withdraw money") {
    amountToBeMoved = Number(prompt("How much would you like to withdraw?"));
    total = balance - amountToBeMoved;
    alert(`Your new balance is: ${total}`);
} else {
    alert("Please select a valid option or kindly check your spelling (:")
}

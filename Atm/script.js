function isValidAnswer (answer) {
    return !isNaN(answer) && answer.trim() != " ";
}

let acctNum;

do{
    acctNum = prompt("please enter your account number")

    if(!isValidAnswer(acctNum)) {
        alert("Invalid input")
    }
} while (!isValidAnswer(acctNum))

let pin;

do{
    pin = prompt("please enter your pin")

    if(!isValidAnswer(pin)) {
        alert("Invalid input")
    }
} while (!isValidAnswer(pin))

    alert("Account Number and Pin Confirmed")




let withdraw = Number(prompt("Enter withdrawal amount"))

const accountBal = 200

let bal = accountBal - withdraw;

if(withdraw === 0) {
    alert("Enter an amount greater than 0")

} else if(withdraw > accountBal) {
    alert("Insuficient balance")

} else{
    alert("Do you wish to withdraw " + "$" + withdraw)
    alert("Succesful withdrawal")
    alert("Your available balance is $" + bal )
}

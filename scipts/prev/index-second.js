alert ('Pin code is 1234 \nTotal amount on the card is 1000 UAH \nAfter autorization, please type 1, 2, 3 or 4 for option selection ');

let card = '1234';
let checkBalance = '1';
let withdrawalProcedure = '2';
let deposit = '3';
let finish = '4';
let totalAmount = 1000;
let empty = '';
let result = document.getElementsByClassName('result');

let authorization = prompt('Enter pincode');
if(authorization == card) {
    let selection = prompt ('Select your option: \n1) Check Balance \n2) Withdraw money \n3) Make deposit \n4) Finish work');
    if (selection == checkBalance) {
        alert (`Your current amount is ${totalAmount} UAH`);
    }
    if (selection === withdrawalProcedure) {
        let withdrawalNumber = + prompt ('Please enter your amount of withdraw \n min-amount: 50 UAH \n max-amount: 25000 UAH');
        if (withdrawalNumber < 50) {
            alert('Your value is not fit requirements \nminimum withdrawal is 50 UAH');
        } else if (withdrawalNumber <= totalAmount) {
            let amountAfterWithdraw = totalAmount - withdrawalNumber;
            alert (`Operation complete, the rest on the card is ${amountAfterWithdraw} UAH`);
        } else {
            alert (`Your value is not fit requirements, current amount is ${totalAmount} UAH`);
        }
    }
    if (selection === deposit) {
        let amountOfDeposit = + prompt('Please enter your amount of deposit \n min-dep: 100 UAH \n max-dep: 100000 UAH');
        if (amountOfDeposit < 100) {
            alert('Your value is not fit requirements \nminimum deposit is 100 UAH');
        } else if (amountOfDeposit <= 100000) {
            let amountAfterDeposit = totalAmount + amountOfDeposit;
            alert (`Operation succes, your current amount is ${amountAfterDeposit} UAH`);
        } else {
            alert('Your value is not fit requirements \nmaximum one time deposit should not exceed 100000 UAH')
        }
    }
    if (selection == finish) {
        alert ('Have a great day :)');
    }
    if (selection == empty) {
        alert ('For selection, write \n1 \n2 \n3 \n4');
    }
} else {
    alert ('Your pin code is incorrect, try again');
}
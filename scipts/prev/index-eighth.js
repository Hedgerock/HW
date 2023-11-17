console.log(formatMoney(111111111.56));


//first solution

function formatMoney(num) {
    if (num !== num * 1) {
        return 'Please enter a number'; //first test
    }

    let money = num.toString();
    let slice = num.toString();

    if (money.includes('.')) {
        slice = slice.split('.');
        money = money.slice(0, -3);
    } else {
        slice = '';
    }

    if (money.length >= 10) {
        return 'Max number is 999 999 999' //second test
    }

    if (money.length <= 3) {
        return money;
    } 

    if (money.length >= 4 && money.length < 7) {
        money = beforeMillion(money);
    }
    if (money.length >= 7) {
        money = afterMillion(money);
    }

    if(slice[1] !== undefined) {
        return money + '.' + slice[1];
    } else {
        return money;
    }
}


function afterMillion(money) { //can't figure out how to do that with loop
    let splicer; 
    money = money.split('');
    if (money.length == 7) {
        splicer = money.splice(1, 0, ',');
        splicer = money.splice(5, 0, ',');
    } else if (money.length == 8) {
        splicer = money.splice(2, 0, ',');
        splicer = money.splice(6, 0, ',');
    } else {
        splicer = money.splice(3, 0, ',');
        splicer = money.splice(7, 0, ',');
    }
    
    money = money.join('');
    return money;
}


function beforeMillion(money) {
    let splicer; 
    money = money.split('');
    for (let i = 0; i < money.length; i++) {
        let position = money.length - 3;
        if (i % money.length - 1 == 0) {
            splicer = money.splice(position, 0, ',');
        }
    }
    money = money.join('');
    return money;
}


//second solution

console.log(secondFormatMoney(123456789.56))  //everything works fine except the period is always converted to a coma

function secondFormatMoney(num) {

    let money = num.toLocaleString().split('');

    for (let i = 0; i < money.length; i++) {

        if (money[i].trim() == '') {
            money[i] = ',';
        }

    }
    return money.join('');
}
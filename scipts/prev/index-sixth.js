let arr = [1, 0 , -2, -1, 58, -4];
let arr1 = [1, 2, 3];


showPositive(arr);
console.log( isNegativePresent(arr) );
console.log( isNegativePresent (arr1) );

console.log(getMin(arr));
console.log(getMin(arr1));

console.log(getMax(arr));
console.log(getMax(arr1));

console.log(sum(arr));
console.log(sum(arr1));


let element;

function showPositive(dataArr) {
    for (let i = 0; i < dataArr.length; i++) {
        let num = dataArr[i];
        if(num >= 0) {
            console.log(num);
        }
    }
}

function isNegativePresent(dataArr) {
    let res = false;

    for (let i = 0; i < dataArr.length; i++) {
        let num = dataArr[i];
        if (num < 0) {
            res = true;
            break;
        }
    }
    return res;
}

function getMin(dataArr) {
    let min = arr[0];
    for(let i = 0; i < dataArr.length; i++){
        if(dataArr[i] < min) {
            min = dataArr[i];
        }
    }
    return min;
}

function getMax(dataArr) {
    let max = arr[0];
    for(let i = 0; i < dataArr.length; i++){
        if(dataArr[i] > max) {
            max = dataArr[i];
        }
    }
    return max;
}

function sum(dataArr) {
    let sum = 0;
    for(let i = 0; i < dataArr.length; i++){
        sum += dataArr[i];
    }
    return sum;
}
const str = 'aaaaa bb kkkkkkkkkkkkkkkkkkkkk aaa bb aa kkkkkkkkkkkkkkkkkkkkk ccc dd mm nn aa cccc kkkkkkkkkkkkkkkkkkkkk';
const badWords = ['aa', 'ccc', 'bb', 'kkkkkkkkkkkkkkkkkkkkk'];

console.log(checkBadWord(str, badWords));

function checkBadWord(str, arr) {
    let newStr = str.split(' ');
    for (let i = 0; i < newStr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            let changes = new RegExp(arr[j], 'g');
            let compare = newStr[i].match(changes);
            if (compare) {
                let stars = '*'.repeat(arr[j].length);
                newStr[i] = newStr[i].replace(changes, stars);
            }
        }
    }
    return newStr.join(' ');
}



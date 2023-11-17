let firstWin = 0;
let secondWin = 0;
let tieLimit = 0;
let firstPlayer;
let firstPlayerNickname;
let secondPlayer;
let secondPlayerNickname;

let firstRockButton = document.querySelector('.firstRock');
let firstPaperButton = document.querySelector('.firstPaper');
let firstScissorsButton = document.querySelector('.firstScissors');

let secondRockButton = document.querySelector('.secondRock');
let secondPaperButton = document.querySelector('.secondPaper');
let secondScissorsButton = document.querySelector('.secondScissors');

let btn = document.querySelector('.firstButton');
let btnSecond = document.querySelector('.secondButton');

btn.setAttribute('disabled', true);
btnSecond.setAttribute('disabled', true);

function fullReset() {
    firstWin = 0;
    secondWin = 0;
    document.querySelector('.result').innerHTML =`ROCK PAPER SCISSORS`
    document.querySelector('.tie').innerHTML = 'TIE:';
    document.querySelector('.scoreSecond').innerHTML = 'WINS:';
    document.querySelector('.scoreFirst').innerHTML = 'WINS:';
    firstPlayer = null;
    secondPlayer = null;
    secondPlayerNickname = null;
    firstPlayerNickname = null;
    document.querySelector('.b').innerHTML = null;
    document.querySelector('.a').innerHTML = null;
    firstRockButton.style.color = 'black';
    secondRockButton.style.color = 'black';
    firstPaperButton.style.color = 'black';
    secondPaperButton.style.color = 'black';
    firstScissorsButton.style.color = 'black';
    secondScissorsButton.style.color = 'black';
}

function reset() {
    secondPlayer = null;
    firstPlayer = null;
    firstRockButton.style.color = 'black';
    secondRockButton.style.color = 'black';
    firstPaperButton.style.color = 'black';
    secondPaperButton.style.color = 'black';
    firstScissorsButton.style.color = 'black';
    secondScissorsButton.style.color = 'black';
}

function resetColorsFirst() {
    firstRockButton.style.color = 'black';
    firstPaperButton.style.color = 'black';
    firstScissorsButton.style.color = 'black';
}

function resetColorsSecond() {
    secondRockButton.style.color = 'black';
    secondPaperButton.style.color = 'black';
    secondScissorsButton.style.color = 'black';
}

textFieldFirst.oninput = function () {
    if (textFieldFirst.value.length < 5) {
        btn.setAttribute('disabled', true);
    } else {
        btn.removeAttribute('disabled');
        this.value = this.value.substr(0, 15);
    }
}

textFieldSecond.oninput = function () {
    if (textFieldSecond.value.length < 5) {
        btnSecond.setAttribute('disabled', true);
    } else {
        btnSecond.removeAttribute('disabled');
        this.value = this.value.substr(0, 15);
    }
}

document.querySelector('.firstButton').onclick = firstClick;
function firstClick() {
    if (textFieldFirst.value.length < 5) {
        alert('Need at least 5 letters for the first nickname');
    } else {
        firstPlayerNickname = document.querySelector('#textFieldFirst').value;
        document.querySelector('.a').innerHTML = firstPlayerNickname;
        textFieldFirst.value = textFieldFirst.value.length = null;
    }
} 

document.querySelector('.secondButton').onclick = secondClick;
function secondClick () {
    if (textFieldSecond.value.length < 5) {
        alert('Need at least 5 letters for the second nickname');
    } else {
        secondPlayerNickname = document.querySelector('#textFieldSecond').value;
        document.querySelector('.b').innerHTML = secondPlayerNickname;
        textFieldSecond.value = textFieldSecond.value.length = null;
    } 
}

document.querySelector('.firstRock').onclick = firstPlayerSelectedRock;
function firstPlayerSelectedRock () {
    if (firstPlayerNickname == undefined) {
        alert('Before the game enter the first nickname');
    } else {
        firstPlayer = 1;
        resetColorsFirst();
        firstRockButton.style.color = 'red';
    }
}

document.querySelector('.firstPaper').onclick = firstPlayerSelectedPaper;
function firstPlayerSelectedPaper () {
    if (firstPlayerNickname == undefined) {
        alert('Before the game enter the first nickname');
    } else {
        firstPlayer = 2;
        resetColorsFirst();
        firstPaperButton.style.color = 'green';
    }
}

document.querySelector('.firstScissors').onclick = firstPlayerSelectedScissors;
function firstPlayerSelectedScissors () {
    if (firstPlayerNickname == undefined) {
        alert('Before the game enter the first nickname');
    } else {
        firstPlayer = 3;
        resetColorsFirst();
        firstScissorsButton.style.color = 'yellow';
    }
}

document.querySelector('.secondRock').onclick = secondPlayerSelectedRock;
function secondPlayerSelectedRock () {
    if (secondPlayerNickname == undefined ) {
        alert('Before the game enter the second nickname');
    } else {
        secondPlayer = 1;
        resetColorsSecond();
        secondRockButton.style.color = 'red';
    }
}

document.querySelector('.secondPaper').onclick = secondPlayerSelectedPaper;
function secondPlayerSelectedPaper () {
    if (secondPlayerNickname == undefined ) {
        alert('Before the game enter the second nickname');
    } else {
        secondPlayer = 2;
        resetColorsSecond();
        secondPaperButton.style.color = 'green';
    }
}

document.querySelector('.secondScissors').onclick = secondPlayerSelectedScissors;
function secondPlayerSelectedScissors () {
    if (secondPlayerNickname == undefined ) {
        alert('Before the game enter the second nickname');
    } else {
        secondPlayer = 3;
        resetColorsSecond();
        secondScissorsButton.style.color = 'yellow';
    }
}

document.querySelector('.start').onclick = startGame;
function startGame() {
    while (firstWin < 3 && secondWin < 3) {
        if (secondPlayerNickname == undefined || firstPlayerNickname == undefined) {
            alert('Before the game select the nickname for both players!');
            break;
        }
        else if (secondPlayer == null || firstPlayer == null) {
            alert('For continue, please select rock, paper or scissors');
            break;
        }
        else if (secondPlayer == 3 && firstPlayer == 1 || secondPlayer == 2 && firstPlayer == 3 || secondPlayer == 1 && firstPlayer == 2) {
            firstWin += 1;
            document.querySelector('.scoreFirst').innerHTML += '☑';
            reset();
            if (firstWin == 3) {
                document.querySelector('.result').innerHTML =`${firstPlayerNickname} is a winner! Click restart for a new game`;
            }
            break;
        }
        else if (secondPlayer == 1 && firstPlayer == 3 || secondPlayer == 3 && firstPlayer == 2 || secondPlayer == 2 && firstPlayer == 1)  {
            secondWin +=1;
            document.querySelector('.scoreSecond').innerHTML += '☑';
            reset();
            if (secondWin == 3) {
                document.querySelector('.result').innerHTML = `${secondPlayerNickname} is a winner! Click restart for a new game`;
            }
            break;
        }
        else if (secondPlayer == firstPlayer) {
            tieLimit += 1;
            document.querySelector('.tie').innerHTML += '☑';
            reset();
            if (tieLimit == 8) {
                alert('You have reached the tie limit');
                document.querySelector('.tie').innerHTML = 'TIE:';
                tieLimit = 0;
            }
            break;
        }
    }
}

document.querySelector('.restart').onclick = restartGame;
function restartGame() {
    fullReset();
}

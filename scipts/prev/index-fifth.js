let quiz = [
    {
        question: '5 x 5',
        first: 24,
        second: 25,
        third: 22,
        fourth: 21,
        correct: 25,
    },
    {
        question: '25 x 5',
        first: 135,
        second: 130,
        third: 115,
        fourth: 125,
        correct: 125,
    },
    {
        question: '40 x 5',
        first: 200,
        second: 210,
        third: 190,
        fourth: 205,
        correct: 200,
    },
    {
        question: '225 / 15 ',
        first: 12,
        second: 17,
        third: 15,
        fourth: 14,
        correct: 15,
    },
    {
        question: '40 + 10',
        first: 45,
        second: 50,
        third: 49,
        fourth: 48,
        correct: 50,
    },
    {
        question: '60 / 6',
        first: 6,
        second: 5,
        third: 10,
        fourth: 16,
        correct: 10,
    },
    {
        question: 'Чему равняется квадрат гипотенузы относительно теоремы Пифагора?',
        first: 'Сумме квадратных корней',
        second: 'Разности квадратов катетов',
        third: 'Произведению синуса и косинуса',
        fourth: 'Сумме квадратов катетов',
        correct: 'Сумме квадратов катетов',
    },
    {
        question: 'Бегает по углам и делит угол по полам',
        first: 'Диагональ',
        second: 'Хорда',
        third: 'Биссектриса',
        fourth: 'Высота',
        correct: 'Биссектриса',
    },
    {
        question: 'Сколько вершин у пирамиды?',
        first: 3,
        second: 4,
        third: 2,
        fourth: 5,
        correct: 4,
    },
    {
        question: 'За достижения в математике становятся лауретами Нобелевской премии',
        first: 'Да',
        second: 'Нет',
        third: 'Возможно',
        fourth: 'Только исключения',
        correct: 'Нет',
    },
];

let userAnswer;
let score = 0;
let wrongPoints = 0;
let points = 0.5;

for (let i = 0; i < quiz.length; i++) {
    let element = quiz[i];
    userAnswer = prompt(
        'Question' + ' ' + 
        (i + 1) + ' ' + 
        'of' + ' ' + 
        quiz.length + ' ' + '(' + ' ' + points + ' ' + 'points' + ' ' + ')' + '\n' + 
        'By your meaning, write the correct answer' + '\n' +
        element.question + '\n' +
        '1' + '.' + ' ' + element.first + '\n' +
        '2' + '.' + ' ' + element.second + '\n' +
        '3' + '.' + ' ' + element.third + '\n' +
        '4' + '.' + ' ' +  element.fourth + '\n' +
        'current score' + ' ' + score
    );
    if(userAnswer == element.correct) {
        alert(`Your answer is correct and you got ${points} points`);
        score+= points;
    } else if (userAnswer === '' || userAnswer === null) {
        alert(`Because of the skip you haven't taken ${points} points`);
        wrongPoints += points;
    } else {
        alert(`Because of the wrong anwser you haven't taken ${points} points`);
        wrongPoints += points;
    }
    if (i >= (quiz.length - 2) / 2) {
        points = 1.5;
    }
    if (i == quiz.length - 3) {
        points = 2;
    }
    if (i == quiz.length - 2) {
        points = 3;
    }
}

if (score == 0) {
    score = 2;
} 
if (score > 12) {
    score = 12;
    score = score - wrongPoints;
} 

alert ('your grade is' + ' ' + Math.floor(score) + ' ' + '/' + ' ' + '12');

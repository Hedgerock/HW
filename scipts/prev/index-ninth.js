const students = [
    {
        userName: 'Ivan',
        userPhone: '0993565442'
    },
    {
        userName: 'Ivan',
        userPhone: '0993555455'
    },
    {
        userName: 'Dima',
        userPhone: '0933565452'
    },
]

let userRequest = prompt('Select: 1.Delete students info, 2.Add a new student');

let userSelectionName;
let userSelectionPhone;
let userReady;

if (userRequest == '' || userRequest == null) {
    alert ('select 1 or 2');
} else {
    userSelectionName = prompt('Please write student name');
    userSelectionPhone = prompt('Please write student phone');
    userReady = toTitle(userSelectionName);
}


if (userRequest == 1) {

    if (userSelectionName == '' || userSelectionPhone == '') {
        alert ('Not enough info');

    } else {

        for (let i = 0; i < students.length; i++) {
            let user = students[i];

            if (user.userName == userReady && user.userPhone == userSelectionPhone) {
                students.splice(students.indexOf(students[i]), 1);
            }
        }
    }  
} else if (userRequest == 2) {

    let result = true;

    for (let i = 0; i < students.length; i++) {
        let user = students[i];

        if (user.userPhone == userSelectionPhone) {
            alert('we already have a student with that phone');
            result = false;
            break;
        }  
    }
    if (result == true) {

        let newStudent = {
            userName: userReady.trim(),
            userPhone: userSelectionPhone
        }
        if (newStudent.userPhone == null) {
            alert('wrong data');
        } else {
            students.push(newStudent);
        }
    } 
}

console.log(students);


function toTitle(str) {

    if (!str || str == null) {
        alert('str empty')
        return str;
    }

    let res = str[0].toUpperCase() + str.toLowerCase().slice(1);

    return res;
}
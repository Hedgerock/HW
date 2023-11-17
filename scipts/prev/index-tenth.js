const students = [
    {userName: 'Ivan', userAge: 24},
    {userName: 'Petya', userAge: 23},
    {userName: 'Ivan', userAge: 26},
    {userName: 'Ira', userAge: 21},
    {userName: 'Katya', userAge: 24},
    {userName: 'Katya', userAge: 25},
    {userName: 'Dima', userAge: 23},
    {userName: 'Ivan', userAge: 25},
]

const filter = studentsFilter (students, function(student) {
    return student.userAge > 24 && student.userName == 'Ivan';
});

const delItem = studentsFilter(students, function(student) {
    if (student.userName !== 'Katya' || student.userAge != 25) {
        return student.userAge && student.userName
    }
})

const delItems = studentsFilter(students, function(student) {
    return student.userAge <= 23 && student.userName != 'Petya'; 
})

console.log(filter);
console.log(delItem);
console.log(delItems);

function studentsFilter (arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const student = arr[i];
        if (callback (student, i)) {
            newArr.push(student);
        }
    }
    return newArr;
}
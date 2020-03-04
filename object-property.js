
const students = [
    {id : 1, name : "rahim"},
    {id : 33, name : "karim"},
    {id : 11, name : "abul"},
    {id : 12, name : "kabul"}
];

// const newArr = [];

// students.map(function(element){
//     newArr.push(element.name);
// })

// console.log(newArr);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const ids2 = students.filter(s => s.id > 10);
const ids3 = students.find(s => s.id > 10);
console.log(ids3);
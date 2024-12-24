//얕은 객체복사
const person={
    name:"kdj",
    age: 29,
    tall: 178
};

let person2 = person;
person2.tall=180;
// console.log(person);
// console.log(person2);

//깊은복사
let person3 ={...person};
person3.tall = 180;
// console.log(person);
// console.log(person3);

//객체비교(주소끼리 비교하는것이 아니고 값으로 비교한다.)
console.log(person);
console.log(person2);
console.log(person3);

console.log(person === person2);
console.log(person === person3);
console.log(person2 === person3);
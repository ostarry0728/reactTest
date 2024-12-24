//forEach : (value, index, 객체배녈) : 향상ehlsvhans for(객체 : 객체배열)
const array = [1 ,2 ,3 ,4];
const array2 = [];

 
//일반포문
for(let i =0; i<array.length; i++) {
    console.log(array[i]);
}
// console.log("========");
foreach
array.forEach((v)=> array2.push(v*2));

// console.log(array2);
let array3 = [
    { name: "구길동 "},
    { name: "홍길동 "},
];
//find
const findValue = array3.find((v)=>{
   return v.name === "홍길동";
});

// console.log(findValue);

// filter
const fintArray = array3.filter((v) => {
    return v.name === "홍길동";
});
console.log(fintArray);

//Map (지도 : 객체를 새로 만들어지는것)
const nameArray = array3.map((v)=>{
    return v.age+30;
});
// console.log(nameArray);

//findIndex 해당된 객체를 찾아서 그 위치를 리턴.
const findIdx = array3.findIndex((v) => {
    return v.name = "홍길동";
});
console.log(findIdx);
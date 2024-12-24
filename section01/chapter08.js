//1. 단락평가
let a = false;
let b = true;

let funca = ()=>{
    console.log("funca");
    return false;
};
let funcb = ()=>{
    console.log("funcb");
    return true;
};

// console.log(funca() && funcb());
// 실제 사용하는 방법
// 함수산언, 표현식, 화살표함수
function printName(person){
    if(typeof person ==='object') {
        console.log("객체입니다")
    }else {
        console.log("객체가 아닙니다")

  
}
}
// console.log(typeof {});

// printName();
printName({name: "kdj"});
//1. 비동기 처리방식으로 진행
console.log("1");

//2. 2번 실행하는데 걸리는 시간은 3초
let id = setTimeout(()=>{
    console.log("~~~3초 걸려서 2");
}, 3000);

console.log("3");
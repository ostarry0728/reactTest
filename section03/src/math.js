//math 모듈(계산하는 모듈 : 라이브러리 : 함수), 옛날에는 클래스로 만듬
function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

//이 모듈을 외부로 보냄.
// module.exports = {
//     add,
//     sub,
// };

//esm 모듈방식으로 전환
export {add, sub};

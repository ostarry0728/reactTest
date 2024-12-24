//1. 숫자 양수무한대값, 음수무한대
let infinityValue = Infinity;
let mInfinityValue = -Infinity;
//나는 숫자가 아니야.
let notANumber = NaN; 
//이런것때문에 스트레스 받지마라.
//연산식결과가 나올수 있도록 형변환한다. 
let nan = 1 * "10";

//덧셈으로 문자열만들기
let name = "김" * "동진";

//템플릿리터널 기능을 잘 사용하자
let name2 = "김동진";
let mylocation = "강남";
let introduceText = "저는 "+ mylocation + "에서 352호 강사입니다."; 
let introduceText2 = `저는 ${mylocation} 에서 352호 ${name2}강사입니다.`; 

//형변환 Number, parseInt(앞에있는 숫자만) => Number 타입으로 변경한다.
let str2 = "10개";
//console.log( Number(str2)); 
//console.log( Number(str2)+ 10); 
//console.log( parseInt(str2)+ 10); 

//산술연산자에서 주의할점
let num1 = 1.0; 
let num2 = 2.0; 
//console.log( num1 / num2); 

//비교연산자 (==),(!=):비추 (===),(!==)강추,  (타입과 값을 같이비교한다. )
let compA = "1";
//console.log( 1 === "1"); 

//typeof 연산자(신경쓰지 말것) null
let num3 = null; 
//console.log( num3); 

//typeof 연산자(신경쓰지 말것) object
let num4 = null; 
//console.log(typeof num4); 

//병합연산자 (??) : null , undefined 그 해당된 값을 적용을 안시켜준다.
let num5; 
num5 = num5 ?? 10; //변수가 undefined, null 타입이면 다른값을 준다. 

//if(num5 === undefined || num5 === null){
//    num5 = 10; 
//}
console.log(num5);



















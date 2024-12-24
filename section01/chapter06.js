//1.객체생성 생성자, 객체리터널
let obj1 = new Object(); 
let obj2 = {};   

//2. 객체 프로퍼티(객체속성)
let person = {
    name: "홍길동",
    age: 20,
    hobby: "축구",
    job: "웹개발자",
    extra: {},
    extra2: function (){
        console.log("나는 멤버함수");
    },
    islike: true,
}; 
//멤버변수 새로추가
person.address ="강남구 352";
//멤버변수 삭제
delete person.address; 
//멤머변수 유무
let flag = "extra2" in person; 
console.log(`flag = ${flag}`); 


let arr5 = [ 
    { name: "구길동" }, 
    { name: "홍길동" }, 
    { name: "저길동" }, 
    { name: "고길동" }, 
    ]; 
    const finded = arr5.find( 
    (item) => item.name !== "구길동" 
    ); 
    console.log(finded);  //{ name: "구길동" } 객체를 출력한

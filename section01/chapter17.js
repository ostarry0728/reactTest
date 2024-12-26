//비동기 처리 작업진행
function task(){
    setTimeout(()=>{
        console.log("Hello");
    }, 3000);
}
function task2(callback){
    setTimeout(callback, 3000);
}

function callback(){
    console.log("Hello2");
}

// task();
// task2((callback)=>{
//     console.log("Hello2");
// });

task2(callback);

//비동기 처리 작업진행
function add(a, b){
    setTimeout(()=>{
        const sum = a + b;
        console.log(sum);
    }, 3000);
}
function add2(a, b, callback2){
    setTimeout(callback2, 3000);
}
function add2(a, b, callback3){
    setTimeout(sum);
}

// add(10,20);
add2(10,20, ()=>{
    
});
const sum = a + b;
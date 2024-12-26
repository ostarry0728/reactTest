//1. promise pending 상태 점검.
// const promise = new Promise(()=>{
//     //2초동안 작업처리
//     setTimeout(()=>{
//         console.log("Hello");
//     }, 2000);
// });

// console.log(promise);

//2. promise fulfilled 상태 점검.
// const promise2 = new Promise((resolve, reject)=>{
//     //2초동안 작업처리
//     setTimeout(()=>{
//         console.log("Hello");
//         resolve("Hello");
//     }, 2000);
// });

// setTimeout(()=>{
//     console.log(promise2);
// }, 3000);

//3. promise reject 상태 점검.
// const promise3 = new Promise((resolve, reject)=>{
//     //2초동안 작업처리
//     setTimeout(()=>{
//         console.log("Hello");
//         reject("실패하는이유를 점검.");
//     }, 2000);
// });

// setTimeout(()=>{
//     console.log(promise3);
// }, 3000);

//4. promise 실제 적용.
// const promise4 = new Promise((resolve, reject)=>{
//     //2초동안 작업처리
//     //excuter 처리문
//     //숫자값을 주면 타입을 점검해서 number 타입이면 resolve, 아니면 reject
//     setTimeout(()=>{
//        const num = "10";
//        if(typeof num === 'number'){
//         resolve(num + 10);
//        }else{
//         reject(`${num} 은 숫자가 아닙니다.`)
//        }
//     }, 2000);
// });

// setTimeout(()=>{
//     console.log(promise4);
// }, 3000);

//5. promise에 실제를 적용해서 성공했을때와 실패했을때를 처리.
// const promise5 = new Promise((resolve, reject)=>{
//     //2초동안 작업처리
//     //excuter 처리문
//     //숫자값을 주면 타입을 점검해서 number 타입이면 resolve, 아니면 reject
//     setTimeout(()=>{
//         const num = null;
//         if(typeof num === 'number'){
//             resolve(num + 10);
//         }else{
//             reject(`${num} 은 숫자가 아닙니다.`)
//         }
//     }, 2000);
// });

//성공했을때 실행하는 함수로 결과를 화면에 출력
// promise5.then((value)=>{
//     console.log(value);
// });
//실패했을때 실행하는 함수로 결과를 화면에 출력
// promise5.catch((value)=>{
//     console.log(value);
// });

//6. promise에 실제를 적용해서 성공했을때와 실패했을때를 처리. => 편리하게 처리.
// promise5.then((value)=>{
//     console.log(value+10);
// }).catch((value)=>{
//     console.log(value);
// });

//7. 함수를 통해서 promise를 실행.
//선언저인함수
// function add(num){
//     const promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             //const num = null;
//             if(typeof num === 'number'){
//                 resolve(num + 10);
//             }else{
//                 reject(`${num} 은 숫자가 아닙니다.`)
//             }
//         }, 2000);
//     });
//     return promise;
// }

// const promise6 = add(10);

// promise6.then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// });

//8. 함수를 통해서 promise를 실행하기 두번 콜백처리.
function add(num){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //const num = null;
            if(typeof num === 'number'){
                resolve(num + 10);
            }else{
                reject(`${num} 은 숫자가 아닙니다.`)
            }
        }, 2000);
    });
    return promise;
}
// const promise7 = add(10);
// promise7.then((value)=>{
//     console.log("promist7 " + value);
//     const promise8 = add(20);
//     promise8.then((result)=>{
//         console.log("promise8 " + result)
//     }).catch((result)=>{
//         console.log("promise8 " + result)
//     });
// }).catch((value)=>{
//     console.log("promist7 " + value);
// });

//콜백지옥 해결
//promise chain
// const promise7 = add(10);
// promise7.then((value)=>{
//     console.log("promist7 : " + value);
//     return add(20); 
// }).then((result)=>{
//     console.log("promise8 : " + result)
//     return add(30);
// }).then((data)=>{
//     console.log("promise9 : " + data)
// }).catch((error)=>{
//     console.log("promist7~9 : " + error);
// });

//음식을 주문하는 상황 promise chain 진행.
function orderFood(food, callback){
    console.log(food + "음식주문");
    setTimeout(()=>{    
        callback(food);
    }, 3000);
}

function orderFood2(food){
    const promise = new Promise((resolve, reject)=>{
        console.log(food + "음식주문");
        setTimeout(()=>{    
            let flag = true;
            if(flag === true){
                resolve(food+"음식완료");
            }else{
                reject(food+"음식실패");
            }

        }, 3000);
    });
    return promise;
}

// const promise9 = orderFood2("떡볶이");
// orderFood2("떡볶이").then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// });

// 냉동
function coolFood(food, callback){
    console.log(food + "음식차게");
    setTimeout(()=>{    
        callback(food);
    }, 3000);
}
function coolFood2(food){
    const promise = new Promise((resolve, reject)=>{
        console.log(food + "음식차게");
        setTimeout(()=>{    
            let flag = true;
            if(flag === true){
                resolve(food+"음식차게완료");
            }else{
                reject(food+"음식차게실패");
            }

        }, 3000);
    });
    return promise;
}
function freezeFood2(food) { 
    const promise = new Promise((resolve, reject) => { 
      console.log(food + '냉동주문'); 
      setTimeout(() => { 
        let flag = true; 
        if (flag === true) { 
          resolve(food + '냉동완료'); 
        } else { 
          reject(food + '냉동미완료'); 
        } 
      }, 3000); 
    }); 
    return promise; 
  } 

freezeFood2('떡볶이') 
.then((value) => { 
    console.log(value); 
}) 
.catch((error) => { 
    console.log(error); 
});

coolFood2("떡볶이").then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
});

//2단계 떡볶이 음식주문 => 차게 음식주문
orderFood2("떡볶이")
.then((value)=>{
    console.log(value);
    return coolFood2("떡볶이");
}).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});

//3단계 떡볶이 음식주문 => 차게 음식주문 => 냉동주문
orderFood2("떡볶이")
.then((value)=>{
    console.log(value);
    return coolFood2("떡볶이");
})
.then((value)=>{
    console.log(value);
    return freezeFood2("떡볶이");
})
.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});
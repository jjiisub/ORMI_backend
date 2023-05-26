// 동기 : 순차적
// 비동기 : 비순차적
// Callback 지옥 : callback function이 계속해서 중첩되는 것
// Promise : async programming -> Callback 지옥 완화
//                             -> Ex) fetch

// ---------------------------------------------------------------------
// 성공한 경우 -> resolve, then

let p = new Promise(function (resolve, reject) {
  resolve("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
  });

// ---------------------------------------------------------------------
// 실패한 경우 -> reject, catch

let pp = new Promise(function (resolve, reject) {
  // resolve('hello world');
  reject("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
  })
  .catch((메시지) => {
    alert("catch 실행!! :" + 메시지);
  });

fetch("http://testtttt.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    // console.log(error);
    alert("서버가 멈췄습니다. 최대한 빠르게 복구하도록 하겠습니다.");
    document.write("서버가 멈췄습니다. 최대한 빠르게 복구하도록 하겠습니다.");
  });

// ---------------------------------------------------------------------

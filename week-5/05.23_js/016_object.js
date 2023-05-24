// Python과의 차이점
// JS에서는 자동으로 key 값을 문자열로 변환
// true, false <-> True, False
let obj = {
  id: "bori",
  pw: "1234",
  name: "boboriri",
  email: "bori@gmail.com",
  active: false,
};

obj["id"];
obj.id; // Python에서는 ERROR
// obj.'id'   -> ERROR

let a = 10;
let b = 10;
let c = 10;

// object 선언
let e = { a, b, c };

// 유사배열 객체 -> 배열과 유사하지만 배열은 아님
let txt = {
  0: "h",
  1: "e",
  2: "l",
  3: "l",
  4: "o",
};

// value의 값으로 문자열 외에 다른 값을 넣었을 경우
let test = {
  one: sum,
  two: console.log,
  three: window.innerWidth,
  four: [10, 20, 30],
  five: "10",
  six: 100,
};
console.log(test);
test.two("호준!!");

let user = {
  id: "licat",
  pw: "1234",
  name: "leehojun",
  email: "hojun@gmail.co.kr",
  active: false,
};
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// user.keys -> ERROR
// object를 상속받는 곳이 많아서 새로운 method 만들기 어려움
// -->> map 함수

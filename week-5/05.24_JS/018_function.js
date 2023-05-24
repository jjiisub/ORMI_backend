function f(x, y) {
  return x + y;
}

(function () {
  console.log("Hello");
});

(x, y) => x + y;
// JavaScript에서는 화살표 함수가 일반함수처럼 많이 사용됨

// 1. 중괄호 없고 구문이 1개면 return 샹략 ㄱㄴ
let f2 = (x, y) => x + y;

// 2. 중괄호가 생기면 return이 있어야 함
let f3 = (x, y) => {
  let z = x + y;
  return z;
};

// 3. parameter가 1개이면 소괄호도 생략 ㄱㄴ
let f4 = (x) => x + x;

// 반지름 입력 -> 원의 넓이
let f5 = (r) => r ** 2 * Math.PI;

function f6(a, b, c, d) {
  return [Math.max(a, b, c, d), Math.min(a, b, c, d), a + b + c + d];
}

let f7 = (a, b, c, d) => {
  return [Math.max(a, b, c, d), Math.min(a, b, c, d), a + b + c + d];
};

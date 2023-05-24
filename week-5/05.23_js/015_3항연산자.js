// 단항 연산자
// 할당 연산자
// 3항 연산자

// Python에서는 a += 1
let a = 10;
a++;
++a;

// ++ 방향 바뀌어도 값 같음
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 할당 연산자
a = 10;
a += 5;
a /= 5;

// 3항 연산자
// contition ? when_true : when_false
let x = true ? 100 : 200;
let y = false ? 100 : true ? 10 : 20; // y = 10

let sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0));

// 아래와 같이 변수할당 없이 바로 3항 연산자로 return 가능합니다.
function solution(n) {
  return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? 1 : 2;
}

// 3항 연산자의 예제
// 재귀 함수
const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

// https://school.programmers.co.kr/learn/courses/30/lessons/120853
function solution(s) {
  s = s.split(" ");
  let arr = [];
  for (let v of s) v === "Z" ? (arr.length ? arr.pop() : "") : arr.push(v);
  return arr.reduce((a, v) => a + +v, 0);
}

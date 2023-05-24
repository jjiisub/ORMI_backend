// sum of 1 ~ 100

// Sol 1.
let s = 0;
for (let i = 0; i < 101; i++) {
  s += i;
}
console.log(s);

// Sol 2.
let ii = 0;
s = 0;
while (ii < 101) {
  s += ii;
  ii++;
}
console.log(s);

// Sol3.
new Array(10);
new Array(10).fill(1);
new Array(10).fill(1).map((_, i) => i);
new Array(10).fill(1).map((_, i) => i + 1);

// Python처럼 구현하기 위해 range, zip, map을 js 함수로 미리 만들 수 있음
// 개인 프로젝트에서는 가능하지만 협업의 경우에는 권장하지 않음

let range = new Array(100).fill(1).map((_, i) => i + 1);
s = 0;
for (const i of range) {
  s += i;
}

// Sol 4.
// reduce로 사용
let ans = new Array(100)
  .fill(1)
  .map((_, i) => i + 1)
  .reduce((a, c) => a + c, 0);

// Sol 5.
let ans2 = new Array(100).fill(1);
s = 0;
for (const index in ans2) {
  //  index는 문자열이므로 int 변환 필요
  //  s += parseInt(index) + 1
  s += +index + 1;
}

// --------------------------------------------------------------------
// sum of 1~100 of even number

// Sol 1.
// 100번 반복
s = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    s += i;
  }
}

// Sol 2.
// 50번 반복
for (let i = 0; i < 101; i += 2) {
  s += i;
}

// Sol 3.
s = 0;
i = 0;
while (i < 101) {
  s += i;
  i += 2;
}

// --------------------------------------------------------------------
// data에서 5보다 작은 수만 더하기
let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1];

// Sol 1.
s = 0;
for (const i of data.filter((x) => x < 5)) {
  s += i;
}

// Sol 2.
data.filter((x) => x < 5).reduce((a, c) => a + c, 0);

// Sol 3.
while (data.length) {
  elem = data.pop();
  if (elem < 5) {
    s += elem;
  }
}

// Sol 4.
data.reduce((a, c) => (c < 5 ? a + c : a), 0);

// Sol 5.
data.map((v) => (v < 5 ? v : 0)).reduce((a, c) => a + c, 0);

// forEach
s = 0;
data.forEach((v) => v < 5 && (s += v));

// --------------------------------------------------------------------
// [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']
// 모든 숫자를 다 더해주세요.
// 다양하게 풀어보세요. for, while, filter, map, reduce...

// Sol 1.
data = [10, "5", 4, "7", 9, "3", 2, "5", 4, "7", "4", "2", "1"];
data.filter((x) => (typeof x == "number" ? x : 0)).reduce((a, c) => a + c, 0);

// Sol 2.
s = 0;
for (const i of data) {
  s += typeof i == "number" ? i : 0;
}

// Sol 3.
function typeCheck(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

// Sol 4.
data.reduce((a, c) => (typeof c === "number" ? a + c : a), 0);

// --------------------------------------------------------------------
// [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']
// 모든 type을 다 더해주세요.
data.reduce((a, c) => a + parseInt(c), 0);
data.map((x) => parseInt(x)).reduce((a, c) => a + c, 0);

// --------------------------------------------------------------------
// https://school.programmers.co.kr/learn/courses/30/lessons/120849

// Sol 1.
"hello world".split("");
Array.from("hello world");
Array.from("hello world")
  .filter((v) => !["a", "e", "i", "o", "u"].includes(v))
  .join("");

// Sol 2.
function solution(my_string) {
  result = "";
  for (const s of my_string) {
    if (["a", "e", "i", "o", "u"].includes(s)) {
      continue;
    }
    result += s;
  }
  return result;
}

// --------------------------------------------------------------------
// 용돈 배년 2배
// 올해 용돈 10,000원
// 나이 8살
// 30만원 이상 -> 용돈 더이상 오르지 않음
// for, continue 문법을 써서 8 ~ 35살 까지 받은 용돈의 총합

let age = 8;
let money = 10000;
let total = 0;
while (age < 36) {
  total += money;
  age++;
  if (money >= 300000) {
    continue;
  }
  money *= 2;
}

// --------------------------------------------------------------------
// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
  my_string
    .split("")
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}

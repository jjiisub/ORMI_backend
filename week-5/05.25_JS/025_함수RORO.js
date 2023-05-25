// 참고용
function mob(x, y, hp, mp, attack, defence, name, speed) {
  console.log(x, y, hp, mp, attack, defence, name, speed);
}

mob(10, 20, 100, 200, 100, 10, "bori", 100);
// 순서가 바뀌면 변수가 제대로 전달되지 않음
mob((y = 20), (x = 10), 100, 200, 100, 10, "bori", 100);

// --------------------------------------------------------------
// https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/

// RORO 기법
// 함수 선언 시 미리 값을 지정
// 초기값이 입력되지 않으면 undefined
function mob2({ x = 100, y = 200, hp, mp }) {
  console.log(x, y, hp, mp);
}

mob2({ y: 10, x: 20, hp: 100, mp: 200 });

// --------------------------------------------------------------

let { one = 100, two, three } = { one: 10, two: 20, three: 30 };
// one에 100을 할당
// object에서 key, value 쌍으로 이뤄진 관계가 아님

// --------------------------------------------------------------
// 값을 안넣어도 오류가 생기지 않는 방법
function mob3({ x = 100, y = 200, hp = 3, mp = 4 } = {}) {
  console.log(x, y, hp, mp);
}
mob3();

// --------------------------------------------------------------
// --------------------------------------------------------------

// 설명
// O
function 함수(a = 10, b = 20, c = 30) {
  return a + b + c;
}
함수();

// X
function 함수({ a = 10, b = 20, c = 30 }) {
  return a + b + c;
}
함수();

// O
function 함수({ a = 10, b = 20, c = 30 }) {
  return a + b + c;
}
함수({}); // 이 코드를 축소한 코드가 위의 코드입니다.
// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined

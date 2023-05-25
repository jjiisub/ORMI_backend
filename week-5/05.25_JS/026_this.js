// this는 Python의 self와 유사
// but 예외사항이 매우 많음

function a() {
  console.log(this);
}
a();
// a를 호출한게 window이므로
// this는 window를 호출

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

myObj.func1();

// ------------------------------------------------------------------
function sayName() {
  console.log(this.name);
}
var name = "Hero";

let peter = {
  name: "Peter Parker",
  sayName: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  sayName: peter.sayName,
};

bruce.sayName();

// 1. 전역공간의 this는 window
// 2. 메서드로 호출한 경우 this는 멤버접근연산자 앞에 객체
// 3. 함수로 호출할 경우 this는 window(node는 global)
// 4. 화살표 함수의 경우 this는 상위스코프
// 5. 생성자 함수의 경우 this는 인스턴스
// 6. 콜백함수의 경우 this가 다르게 동작 할 수 있음

// 논리 연산자 (&&, ||, !)

let x = true;
let y = false;

x && y; // false
x || y; // true
!y; // true
x && !y; // true
!x || y; // false

// 실무에서 많이 사용
!!y;
!!"hello";

!!NaN; // false
!!null; // false
!!undefined; // false

!![]; // true
// 를 사용하지 말고
Number.isNaN([]);
Number.isNaN({});
// 와 object의 길이를 함께 판단해야 함

// JavaScript에서는 단락평가를 자주 사용
null && "hello";
"world" && "hello";

// 단락평가는 거의 ||를 사용
let name = "";
name = name || "no name";

// 보통 3항 연산자 + 단락 평가로 사용
let log_in = true;
log_in_page = log_in && "welcome";
log_in_page;

let pw = "";
pw = pw || "no password";

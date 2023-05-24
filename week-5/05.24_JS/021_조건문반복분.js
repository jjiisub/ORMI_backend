if (condition) {
  console.log("hello");
}

if (false) {
  console.log("hello1");
} else if (false) {
  console.log("hello2");
} else {
  console.log("hello3");
}

switch (2) {
  case 1:
    // 값이 1인 경우 실행
    console.log(1);
    break;
  case 2:
    // 값이 2인 경우 실행
    console.log(2);
    break;
  default:
    // 모든 case에 해당하지 않는 경우 실행
    console.log("default");
    break;
}

switch (new Date().getDay()) {
  case 1:
    document.write("월요일입니다.");
    break;
  case 2:
    document.write("화요일입니다.");
    break;
  case 3:
    document.write("수요일입니다.");
    break;
  case 4:
    document.write("목요일입니다.");
    break;
  case 5:
    document.write("금요일입니다.");
    break;
  default:
    document.write("금금요일입니다. 주말이 뭐죠?");
    break;
}

switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("평일입니다.");
    break;
  case 6:
  case 7:
    console.log("주말입니다.");
    break;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 무한 loop
for (;;) {
  pass;
}

for (const key in [10, 20, 30]) {
  console.log(key); // index
}

for (const key in { one: 1, two: 2 }) {
  console.log(key);
}

for (const i of [10, 20, 30]) {
  console.log(i);
}

let x = 0;
while (x < 10) {
  console.log(x);
  x++;
}

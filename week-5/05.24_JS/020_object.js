const babaYaga = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim: function () {
    console.log("Yeah, I'm thinking I'm back!");
  },
};

// 최신 문법 사용
const babaYaga2 = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim() {
    console.log("Yeah, I'm thinking I'm back!");
  },
};

const a = "hello";
const b = "world";
const data = {
  a,
  b,
  c: "!!",
  d: [10, 20, 30],
};

// CRUD (Create, Read, Update, Delete)
// 데이터 추가 (append), 데이터 업데이트 (update)
const human = {
  name: "bori",
  age: 101,
};
human.height = 250;
human["height"] = 300;
human;

// JS 전개구문
/// human의 값을 가져올 수 있음
const human2 = {
  ...human,
  age: 10,
};

// human.key() -> js에는 없음
Object.keys(human);

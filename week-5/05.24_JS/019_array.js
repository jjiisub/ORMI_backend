const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = new Array(4, 5, 6);

const arr = [[10, 20], 2, 3, 4, 5];
arr[0];
arr[0][0];
arr.length;
arr.pop();
arr.pop(2); // 들어가는 값과 상관없이 마지막 값 반환
arr.push(100);

const arr4 = [1, 2, 3, 4, 5];
arr4.shift();
arr4.unshift(100);
arr4.unshift(1000, 2000, 3000);

const arr5 = [1, 2, 3, 4, 5];
// splice() 메소드는 배열의 요소를 추가, 제거 또는 교체
// array.splice(start, deleteCount, changeitem)
arr5.splice(1, 0, 100);
arr5;

arr5.splice(1, 1, 1000);
arr5;

arr5.splice(1, 1, 200, 300);
arr5;

const arr6 = [10, 20, 30, 40, 50, 60];
arr6.slice(2, 5); // arr[2:5]

// 사전식 정렬
const arr7 = [1, 11, 3, 7, 8, 22, 5];
arr7.sort();

// 오름차순
arr7.sort((a, b) => a - b);

// 내림차순
arr7.sort((a, b) => b - a);

// forEach (자주사용) -> 반복만
// 새로운 arr를 만들고 싶다면 map을 사용
const arr8 = [1, 11, 3, 7, 8, 22, 5];
arr8.forEach((item, index, arr) => {
  console.log(item);
  console.log(index);
  console.log(arr);
});

// 자주 쓰는 방식
const arr9 = [1, 11, 3, 7, 8, 22, 5];
arr9.forEach((v, i) => {
  console.log(v); // Value
  console.log(i); // Index
});

/* 
<body>
    <div id="0"></div>
    <div id="1"></div>
    <div id="2"></div>
    <div id="3"></div>
    <div id="4"></div>
    <div id="5"></div>
    <div id="6"></div>
    <div id="7"></div>
</body> 
*/
const arr10 = [1, 11, 3, 7, 8, 22, 5];
arr10.forEach((v, i) => {
  const tag = document.getElementById(i);
  tag.innerHTML = v;
});

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr11.filter((el) => el % 2 === 0);

console.log(newArr);

// reduce
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((a, c) => {
  console.log(a, c);
  return a + c;
});

// 초기화하지 않으면 빈 array일 때 ERROR
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((a, c) => a + c);
// 0으로 초기화 필요
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((a, c) => a + c, 0);

// -------------------------------------------------------------------
// ' in '
10 in [10, 20, 30, 40]; // false

[10, 20, 30, 40].includes(10);

// -------------------------------------------------------------------
// join
const arr12 = ["hello", "world", "010"];
arr12.join("!");

// -------------------------------------------------------------------
// map은 data를 뽑아내는 형태로 사용
[1, 2, 3, 4].map((x) => x ** 2);

[
  [10, 20],
  [20, 30],
  [30, 40],
].map((x) => x[0] + x[1]);

["kimbori", "nambori", "leebori"].map((x) => x.slice(0, 3));
["kimbori", "nambori", "leebori"].map((x, i) => [x.slice(0, 3), i]);

[
  {
    name: "bori",
    age: 10,
  },
  {
    name: "gildol",
    age: 20,
  },
].map((x) => x.age);

[
  {
    name: "bori",
    age: 10,
  },
  {
    name: "gildol",
    age: 20,
  },
].map((value, index, object) => {
  console.log(value, index, object);
  return value;
});

let data = [
  {
    name: "lee hojun",
    age: 10,
  },
  {
    name: "kim junho",
    age: 20,
  },
  {
    name: "sin sunghun",
    age: 30,
  },
];

// 원하는 데이터
// 위 데이터를 가지고 아래와 같이 새로운 array를 만들고 싶습니다. 정답 코드를 작성해주세요.
// [0, "hojun", 9],[1, "junho", 19],[2, "sunghun", 29]

data.map((v, i) => [i, v.name.split(" ")[1], v.age - 1]);

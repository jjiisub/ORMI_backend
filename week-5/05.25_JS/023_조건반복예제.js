// https://codingdojang.com/scode/393?answer_mode=hide
// str(list(range(10001))).count('8')

// Sol 1.
"."
  .repeat(9999)
  .split(".")
  .map((v, i) => i + 1)
  .join("")
  .split("")
  .filter((v) => v === "8").length;

// Sol 2.
let s = "";
for (let i = 0; i < 101; i++) {
  s += i;
}
s.split("").filter((v) => v === "8").length;

// Sol 3.
Array(100)
  .fill(0)
  .map((v, i) => i + 1)
  .join("")
  .split("")
  .filter((v) => v === "8").length;

// -------------------------------------------------------------------
// Sol 1.
const zip = (a, b) => a.map((v, i) => [v, b[i]]);

let ss = [1, 3, 4, 8, 13, 17, 20];
zip(ss, ss.slice(1));
zip(ss, ss.slice(1)).sort((a, b) => a[1] - a[0] - (b[1] - b[0]));

// Sol 2.
let s2 = [1, 3, 4, 8, 13, 17, 20];
let min = Infinity;
let index = 0;
for (let i = 0; i < s.length - 1; i++) {
  if (s2[i + 1] - s2[i] < min) {
    min = s2[i + 1] - s2[i];
    index = i;
  }
}
console.log([s[index], s[index + 1]]);

// -------------------------------------------------------------------
// 엘리베이터 최대 몸무게 500kg입니다.
// 다음 친구들이 엘리베이터를 탔을 때 최대로 탑승할 수 있는 인원수를 구하세요.
let weight = [60, 50, 55, 60, 77, 88, 56, 67, 89, 45, 55, 45];

weight = weight.sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < weight.length; i++) {
  if (sum + weight[i] > 500) {
    console.log(`최대 ${i}명 탈 수 있습니다`);
    break;
  }
  sum += weight[i];
}

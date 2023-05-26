// 해당하는 Id를 가진 요소에 접근하기
// 트리 탐색이므로 부하 발생
// -> 지나친 반복 실행 시 비효율
document.getElementById();

// css 선택자로 단일 요소에 접근하기
document.querySelector(selector);

// --------------------------------------------------------------------

const body = document.querySelector("body");
const myimg = document.createElement("img");
// const idAttr = target.getAttribute('id');
myimg.setAttribute("src", "https://img.wendybook.com/image_detail/img159/159599_01.jpg");
body.append(myimg);

// --------------------------------------------------------------------

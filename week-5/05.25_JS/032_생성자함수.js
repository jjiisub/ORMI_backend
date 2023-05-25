// class 처럼 "찍어내는 틀"의 역할
// but. 찍어내는 틀로서는 class가 비교적 용이
// 동일한 property를 가지는 object 생성
// prototype을 이용하여 메모리 효율 높일 수 있음

let book = {
  책이름: "알잘딱깔센 JavaScript 비동기 프로그래밍 - 비동기 너 내 동기가 돼라",
  책가격: 0,
  저자: ["구나영", "김경림"],
  출판일: "2022.08.12",
}; // 책이 100권이면

function Book(책이름, 책가격, 저자, 출판일) {
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
}

let book1 = Book("Python", 1000, "bori", "2023.05.25");
// book1 -> undefined
//       -> Book()의 return 값이 없기 때문

let book2 = new Book("Python", 1000, "bori", "2023.05.25");
// book2 =  {책이름:"Python", 책가격:1000, 저자:"bori", 출판일:"2023.05.25"}
// new 는 return this의 기능

// Python => 대부분이 class로 되어 있음
// JavaScript => class가 ES6부터 나온 문법
//            -> 그 전에는 생성자 함수로 사용

let myArr = new Array(1, 2, 3);
let myArr2 = new Array(4, 5, 6);
// Python에서 class로 instance를 만들어내듯 찍어냄

myArr2.length;
myArr.length;

myArr.forEach((item) => {
  console.log(item);
});

myArr2.forEach((item) => {
  console.log(item);
});

// --------------------------------------------------------------------

function Factory() {}
function NewFactory(name) {
  this.name = name;
  this.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  };
}

let robot1 = new Factory();
let robot2 = new NewFactory("브랜든2");
let robot3 = new NewFactory("브랜든3");
let robot4 = new NewFactory("브랜든4");

// 각 객체를 생성할 때마다 각각 함수를 새로 만들고 있음
//    -> 비효율

function Parent() {
  this.name = "재현";
}
Parent.prototype.rename = function (name) {
  this.name = name;
};
Parent.prototype.sayName = function () {
  console.log(this.name);
};

let 부모1 = new Parent();
부모1.rename("호준"); // 부모1.name = '호준'

function Child() {
  Parent.call(this);
}

// Child가 Parent를 상속
Child.prototype = Object.create(Parent.prototype);

Child.prototype.canWalk = function () {
  console.log("now i can walk!!");
};

Child.prototype.rename("호돌");
Child.prototype.sayName(); // '호돌'

let 자식1 = new Child();
자식1.rename("호돌돌");
자식1.sayName();

// ---------------------------------------------------------------------

class Robot {
  // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다.
  // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
  // Python의 __init__ 역할
  constructor(name) {
    this.name = name;
  }

  // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

// BabyRobot은 Robot을 상속
class BabyRobot extends Robot {
  constructor(name) {
    super(name);
    this.ownName = "아이크";
  }

  sayBabyName() {
    // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
    this.sayYourName();
    console.log("Suceeding you, Father!");
  }
}

let one = new Robot("one");
let two = new BabyRobot("two");

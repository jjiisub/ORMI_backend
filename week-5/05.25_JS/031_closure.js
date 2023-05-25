```
def one(x):
    def two(y):
        return x**y
    return two

expo2 = one(2)
expo3 = one(3)

expo2(3)  // 8
expo3(3)  // 9
```;
// closure란, 폐쇠된 공간 안의 데이터에 접근하기 위한 방법

function one(x) {
  function two(y) {
    return x ** y;
  }
  return two;
}

expo2 = one(2); // 2 ** y
expo3 = one(3); // 3 ** y

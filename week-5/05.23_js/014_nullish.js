// https://ko.javascript.info/nullish-coalescing-operator
// 나온지 얼마되지 않았음

let firstname = null;
let lastname = null;
let nickname = "bori";

// 중간에 null이 아닌 값이 들어 있으면 출력
firstname ?? lastname ?? nickname ?? "익명의 사용자";

// nullish 연산자와 단락평가의 차이점
let height = 0;
height || 100;
height ?? 100;

// || : 0, null, undefined, '', NaN     -> false
// ?? : null, undefined                 -> false

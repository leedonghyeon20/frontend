// 함수표현식
const myFunc1 = function () {};
const myFunc2 = function name() {};

const showMessage = function () {
  console.log("안녕하세요");
};
showMessage();

const multiply = function (x, y) {
  console.log(`${x}, ${y}`);
};
multiply(35, 4);

// multiply2 이름은 내부용(외부에서 호출 불가)
const myFunc3 = function multiply2(x, y) {
  return x * y;
};
console.log(myFunc3(6, 8));

const rec = function f(x) {
  if (x == 0) {
    console.log(x);
  } else {
    console.log(x);
    f(x - 1);
  }
};
rec(5);

// 함수 정의 방식
// multiply4 vs myFunc3
// 호이스팅 (hoisting) : 선언하기 전에 사용
// function name(){} / var 변수
console.log(multiply4(5, 6)); // 호이스팅 허용

// y = 5;
console.log(`y = ${y}`); // 호이스팅 허용
var y = 6;

function multiply4(x, y) {
  return x * y;
}

// 함수 정의 방식
// multiply4 vs myFunc4
// 호이스팅 (hoisting) : 선언하기 전에 사용
// function name(){} / var 변수
// 호이스팅 불가
// 함수표현식 / let, const
console.log(multiply4(5, 6)); // 호이스팅 허용
console.log(myFunc4(3, 9)); // ReferenceError: Cannot access 'myFunc4' before initialization
// y = 5;
console.log(`y = ${y}`); // 호이스팅 허용
var y = 6;

function multiply4(x, y) {
  return x * y;
}

const myFunc4 = function multiply2(x, y) {
  return x * y;
};

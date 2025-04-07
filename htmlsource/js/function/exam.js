// 1. 함수선언방식으로 두 개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성 후 테스트
function multiply(x, y) {
  return x + y;
}
console.log("3 + 4 = " + multiply(3, 4));
// 2. 함수표현식으로 1번 변경
const myFunc = function multiply(x, y) {
  return x + y;
};
console.log("3 + 4 = " + multiply(3, 4));

// 3. 1 ~ 10까지 더하는 직압을 함수표현식으로 작성
let sum = 0;
const myFunc2 = function multiply() {
  for (let x = 0; x < 11; x++) {
    sum += x;
  }
  return sum;
};
console.log(myFunc2());

// 4. 숫자를 받아서 3의 배수 찾기
//    3의 배수라면 박수 출력, 아니라면 통과

function three(x, y = 3) {
  if (x % y == 0) {
    return "박수";
  } else {
    return "통과";
  }
}
console.log(three(34));

// 5. 4번 개선(3의 배수라면 박수 출력, 아니라면 통과)
//    + 9의 배수인 경우 박수 x 2 출력
function three2(x, y = 3) {
  if (x % y == 0) {
    if (x % 9 == 0) {
      return "박수 x 2";
    }
    return "박수";
  } else {
    return "통과";
  }
}
console.log(three2(12));

// 6. 공인중개사 시험 점수를 입력하면 합격여부를 알려주는 함수
//    과목은 2과목 합해서 120점 이상이면 합격
//    한 과목이 40점 미만이면 불합격

function gong(x, y) {
  if (x < 40 || y < 40) {
    return "불합격";
  } else if (x + y >= 120) {
    return "합격";
  } else {
    return "불합격";
  }
}
console.log(gong(50, 60));

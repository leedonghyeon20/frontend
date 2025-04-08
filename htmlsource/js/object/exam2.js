// 2개의 주사위를 던졌을 때 나오는 눈을 (5,3) 출력하고
// 눈의 합이 5가 아니면 계속 주사위를 던지고 눈의 합이 5인 경우 실행 중단
let dice1 = 0;
let dice2 = 0;
while (dice1 + dice2 != 5) {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  console.log(`(${dice1}, ${dice2})`);
  console.log(dice1 + dice2);
}

// 로또 번호 6개를 추출하여 배열에 담은 후 출력 (1~45)
let lottoArr = [];
while (true) {
  let lotto = Math.floor(Math.random() * 46) + 1;

  if (lottoArr.indexOf(lotto) == -1) {
    lottoArr.push(lotto);
  }
  if (lottoArr.length > 5) break;
}
console.log(lottoArr);

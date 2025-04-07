let numArr = [57, 273, 586, 32, 57, 103, 312, 2];

// 최소값 최대값 출력
let max = numArr[0];
let min = numArr[0];

for (let i = 1; i < numArr.length; i++) {
  if (max < numArr[i]) max = numArr[i];
  if (min > numArr[i]) min = numArr[i];
}
console.log(`최댓값 : ${max}, 최솟값 : ${min} `);

for (const num of numArr) {
  if (max < num) max = num;
  if (min > num) min = num;
}
console.log(`최댓값 : ${max}, 최솟값 : ${min} `);

numArr.sort((a, b) => a - b);
console.log("최솟값 ", numArr[0]);
console.log("최댓값 ", numArr[numArr.length - 1]);

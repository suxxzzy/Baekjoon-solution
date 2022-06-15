const binarySearch = function (arr, target) {
  //특이한 경우: 배열의 길이가 0이거나 1인 경우
  if (arr.length === 0 || (arr.length === 1 && arr[0] !== target)) return -1;
  if (arr.length === 1 && arr[0] === target) return 0;
  //주어진 배열을 반으로 나눈다.
  let start = 0;
  let end = arr.length - 1;
  let half = Math.floor(arr.length / 2);
  //중간값인 경우: 바로 half 리턴
  //중간값보다 큰 경우: 탐색을 시작할 인덱스를 half + 1로 조정 후, 같은 과정을 반복
  //중간값보다 작은 경우: 탐색을 종료할 인덱스를 half - 1로 조정 후 같은 과정을 반복
  //언제 멈출까? 시작값과 중간값이 동일한 경우 멈춘다
  while (start <= half) {
    if (arr[half] === target) return half;
    if (arr[half] < target) {
      start = half + 1;
    }
    if (arr[half] > target) {
      end = half - 1;
    }
    half = Math.floor((start + end) / 2);
  }
  return -1;
};

let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2

output = binarySearch([4, 5, 6, 9], 100);
console.log(output); // --> -1

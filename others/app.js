function largestProductOfThree(arr) {
  //항상 배열의 길이가 3 이상인 경우만 생각한다.
  //배열의 길이가 3인 경우는 손쉽게 바로 곱을 구하면 끝이다.
  if (arr.length === 3) {
    return arr.reduce((acc, cur) => acc * cur);
  }
  //배열의 길이가 3을 넘는 경우
  //일단 오름차순으로 배열 정렬해보자.
  arr.sort((a, b) => a - b);
  const last = arr.length - 1;

  //배열에서 가장 큰 수가 0인 경우: 0
  if (arr[last] === 0) return 0;

  //배열이 모두 음수인 경우: 가장 마지막 요소가 0보다 작은 경우다. 제일 마지막 요소 3개를 곱한다.
  //배열에서 가장 작은 수가 0 이상인 경우
  //배열이 0, 양수 포함하는 경우
  //배열이 양수만 포함하는 경우
  if (arr[last] < 0 || arr[0] >= 0) {
    return arr[last - 2] * arr[last - 1] * arr[last];
  }
  //배열이  음수, 0, 양수 모두 포함하는 경우
  //음수 2개 이상
  const minus = arr.filter((el) => el < 0);
  if (minus.length >= 2) {
    const cand1 = arr[last - 2] * arr[last - 1] * arr[last];
    const cand2 = arr[0] * arr[1] * arr[last];
    return Math.max(cand2, cand1);
  }
  //음수 1개
  if (minus.length === 1) {
    return arr[last - 2] * arr[last - 1] * arr[last];
  }
}

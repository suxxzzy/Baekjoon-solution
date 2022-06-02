function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function orderOfPresentation(N, K) {
  //정답 변수 선언
  let answer = 0;
  //주어진 배열 K를 순회한다
  for (let i = 0; i < K.length; i++) {
    //각 자리 숫자보다 작은 숫자가 몇 개 있는지 구한다 ...(1)
    //이전의 숫자 제외하고 남은 숫자 중 작은 숫자 개수를 알아낸다.
    const smaller = K.slice(i + 1).filter((el) => el < K[i]).length;
    //남아있는 자리수를 순서 구분하여 나열하는 가지수 구한다...(2)
    const remain = factorial(K.slice(i + 1).length);
    //1과 2를 곱한 값을 answer에 누적하며 더한다
    answer += smaller * remain;
  }
  return answer;
}

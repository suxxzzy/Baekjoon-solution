const cache = [];
function fibonacci(n) {
  //음수 입력 금지
  if (n < 0) return;
  //만약에  0, 1이면 그 숫자 그대로 반환
  if (n <= 1) {
    cache[n] = n;
    return n;
  }
  //이미 캐시에 저장된 값이면
  if (cache[n]) return cache[n];

  //근데 그게 아니면
  cache[n] = fibonacci(n - 2) + fibonacci(n - 1);
  return cache[n];
}

//tabulation을 이용한 방법: 반복문이 사용됨

function fib(n) {
  if (n < 0) return;
  const cache = [0, 1];
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 2] + cache[i - 1];
  }
  return cache[n];
}
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));

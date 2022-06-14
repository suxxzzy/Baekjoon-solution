//tab: 테스트 시 문법 오류 있다고 함
function powerTab(base, exponent) {
  const cache = [1, base % 94906249];
  //예외 처리
  //지수가 1이하인 경우
  if (exponent <= 1) return cache[exponent];

  //그 외의 경우: 주어진 지수를 반으로 나눈다. 예를 들어 6인 경우 f(3) *f(3) 5인 경우 f(3) *f(2)
  //이미 계산한 값은 다시 계산하지 않도록, 저장해둘 곳이 필요하다. tabulation 사용
  //이미 계산되어 있는 값일 경우
  //계산되지 않은 값일 경우
  for (let i = 2; i <= exponent; i++) {
    const half = Math.floor(i / 2);
    cache[i] = (cache[half] * cache[i - half]) % 94906249;
  }
  return cache[exponent];
}

function powerLog(base, exponent) {
  const cache = [1, base % 94906249];

  const aux = function (exponent) {
    //예외 처리
    //지수가 1이하인 경우
    if (exponent <= 1) return cache[exponent];

    //지수가 2 이상인 경우: 반절
    if (cache[exponent] !== undefined) return cache[exponent];

    const half = Math.floor(exponent / 2);
    cache[exponent] = (aux(half) * aux(exponent - half)) % 94906249;
    return cache[exponent];
  };

  return aux(exponent);
}

let output = powerLog(3, 40);
output = powerTab(3, 40);
console.log(output);

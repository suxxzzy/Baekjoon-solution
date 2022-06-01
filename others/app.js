function barcode(len) {
  //길이는 1부터 50까지 들어올 수 있다.
  //가장 작은 수를 반환해야 한다.
  //만약에 1을 입력받으면 당연히 1을 리턴할 것
  if (len === 1) return "1";

  const isValid = (str) => {
    //절반 길이
    const half = Math.floor(str.length / 2);
    //거꾸로 뒤집기
    const reversed = str.split("").reverse().join("");

    //절반 길이가 될 때까지 비교: 이비 비교한 부분은 다시 비교할 필요없다
    for (let i = 1; i <= half; i++) {
      if (reversed.slice(0, i) === reversed.slice(i, 2 * i)) return false;
    }
    return true;
  };

  //결과값을 담을 변수
  let answer = "";
  const aux = (answer) => {
    for (let i = 1; i <= 3; i++) {
      const next = answer + i;
      if (isValid(next)) {
        if (next.length === len) return next;
        if (aux(next) !== null) return aux(next);
      }
    }
    return null;
  };

  return aux(answer);
  //1,2,3숫자를 붙여야 하는데 재귀적으로 붙여야 한다.
  //붙이고 나서 만들 수 있는 바코드인지 검사한다.
  //만들 수 없는 바코드라면 다른 숫자 붙여야 한다.
  //1,2,3 하나씩 다 붙였는데도 만들 수 없다면 이전에 잘못된 숫자를 붙였다는 뜻이다. 이전 숫자 고쳐야 한다
  //만들 수 있는 바코드라면
  //len과 길이가 같다면 이때 그 바코드를 리턴한다
  //아직 길이가 모자라다면 계속 같은 과정을 반복한다
}

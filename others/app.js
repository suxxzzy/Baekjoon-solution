let tiling = function (n) {
  //sol1: 현재 결과는 이전의 두 결과의 합과 같음을 이용한다. tabulation
  //1,2,3,5,8,13...
  const arr = [1, 2];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n - 1];
  // //sol2 가로의 개수에 따라 결과값을 얻어낸다
  // const fac = function (n) {
  //   const arr = [1];
  //   for (let i = 1; i <= n; i++) {
  //     arr[i] = arr[i - 1] * i;
  //   }
  //   return arr[n];
  // };
  // const h = Math.floor(n / 2);
  // let answer = 0;
  // for (let i = 0; i <= h; i++) {
  //   const v = n - 2 * i;
  //   answer += fac(v + i) / fac(i) / fac(v);
  // }
  // return answer;
};

console.log(tiling(4));

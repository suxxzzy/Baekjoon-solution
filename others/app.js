const isSubsetOf = function (base, sample) {
  //예외처리
  if (sample.length === 0) return true;
  if (base.length < sample.length) return false;

  //객체만들기
  const object = {};
  base.forEach((el) => {
    if (!object[el]) object[el] = true;
  });

  let answer = false;
  for (let i = 0; i < sample.length; i++) {
    if (!object(sample[i])) {
      return false;
    } else {
      answer = true;
    }
  }

  return answer;
};

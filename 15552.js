const fs = require('fs');

const input = fs.readFileSync('example.txt',"utf8").toString().split('\n'); //utf8이 없으니까 아무것도 출력 안되더라. 공식문서 보니 빈 버퍼만 나와서 나는 이렇게 해야했음. 

console.log(input);

let answerStr = '';

for(let i = 0; i < input.length; i++){
  const nums = input[i].split(' ');
  answerStr += Number(nums[0]) + Number(nums[1]) + '\n'
}

console.log(answerStr);

/*
[ '1 1', '12 34', '5 500', '40 60', '1000 1000' ]
2
46
505
100
2000
*/
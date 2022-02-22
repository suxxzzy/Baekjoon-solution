const fs = require('fs');

const input = fs.readFileSync('example.txt',"utf8").toString().split('\n'); //utf8이 없으니까 아무것도 출력 안되더라. 공식문서 보니 빈 버퍼만 나와서 나는 이렇게 해야했음. 

//원하는 데이터만 받아오기
const numsInput = input.map(el => Number(el)).slice(1);


const result = [];

numsInput.forEach(num => {
  if(num !== 0){
    result.push(num);
  }else{
    result.pop();
  }
})

console.log(result.reduce((acc,cur) => acc + cur,0));



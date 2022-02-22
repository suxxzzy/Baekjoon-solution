const fs = require('fs'); 
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

//주어진 input에서 필요한 괄호 부분만 받아오기
const brackets = input.slice(1)

//정답을 담을 배열 만들기
let answers = '';

const pairs = {
  "(": ")"
}

const isValidBrackets = (str) => {
  //입력받은 문자의 길이가 홀수이면 false
  if(str.length % 2 === 1) return false;
  //그렇지 않은 경우, 짝이 맞는지 확인 필요
  const stack = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] === "("){
      stack.push(str[i])
    }else{
      const temp = stack.pop();
      if(pairs[temp] !== str[i]) return false;
    }
  }
  return stack.length === 0? true : false;
}


//정답을 담는 과정
for(let i = 0; i < brackets.length; i++){
  if(isValidBrackets(brackets[i])){
    answers += `YES\n`
  }else{
    answers += `NO\n`
  }
}

console.log(answers.trim());
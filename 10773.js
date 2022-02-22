const fs = require('fs'); 
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const numsInput = input.map(el => Number(el)).slice(1);

const result = [];

numsInput.forEach(num => {
  if(num !== 0){
    result.push(num);
  }else{
    result.pop();
  }
})

let sum = 0;
result.forEach(el => {
    sum += el;
})

console.log(sum);



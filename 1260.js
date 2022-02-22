const fs = require('fs');

const input = fs.readFileSync('example.txt',"utf8").toString().split('\n'); //utf8이 없으니까 아무것도 출력 안되더라. 공식문서 보니 빈 버퍼만 나와서 나는 이렇게 해야했음. 

console.log(input);

//요구사항
/*
입력: 첫번째 줄 정점 개수, 간선 개수, 탐색 시작 정점 , 다음 줄 간선이 연결하는 두 정점의 번호. 무방향그래프이다.
출력: DFS 출력 결과와 BFS 출력 결과

순회 시 주의사항: 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것부터 먼저 방문해야 한다.

제일 먼저 해야 할 것: 인접 행렬로 그래프 만들어 보기 
그 다음으로 해야 할것: 그래프 순회하기
*/

//일단 그래프부터 먼저 만들어보자. 정점의 개수는 4개라고 했음. (인접 행렬의 길이는 4)

const numberofvertex = Number(input[0].split(' ')[0])

//그래프 틀 완성
const graph = new Array(numberofvertex).fill(0).map(el => new Array(numberofvertex).fill(el));

//간선 넣기, 그래프 최종 완성
const edges = input.slice(1);
edges.forEach(edge => {
  const [start,end] = edge.split(' ').map(el => Number(el) - 1);
  graph[start][end] = 1;
  graph[end][start] = 1;
})

//dfs 시작하기

//순회 시작점 구하기(인접행렬에서는 1을 빼야 함.)
const start = Number(input[0].split(' ')[2]);

//순회 결과를 담을 배열 만들기
let dfsResult = '';
const dfsVisited = {};

(function dfs(start){
  dfsResult += start + ' ';
  dfsVisited[start] = true;
  graph[start - 1].forEach((neighbor,index) => {
    if(neighbor === 1 && !dfsVisited[index + 1]){
      dfs(index + 1);
    }
  })
})(start);

const dfs = dfsResult.slice(0,-1) //이게 dfs 최종 결과.

//bfs시작하기 
let bfsResult = ``;
const bfsVisited = {};
const queue = [start]; //[1]
bfsVisited[start] = true;

while(queue.length !== 0){
  temp = queue.shift();
  bfsResult += temp + ' ';
  graph[temp - 1].forEach((neighbor,index) => {
    if(neighbor === 1 && !bfsVisited[index + 1]){
      bfsVisited[index + 1]= true;
      queue.push(index + 1);
    }
  })
}

const bfs = bfsResult.slice(0,-1) //이게 bfs 최종결과

console.log(`${dfs}\n${bfs}`)



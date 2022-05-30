function makeGraph(edges) {
  //최대값을 찾는다
  let max = 0;
  edges.forEach((el) => {
    const [start, end] = el;
    max = Math.max(max, start, end);
  });

  //그래프를 생성한다
  const graph = new Array(max + 1)
    .fill(0)
    .map((el) => new Array(max + 1).fill(0));

  edges.forEach((el) => {
    const [start, end] = el;
    graph[start][end] = 1;
    graph[end][start] = 1;
  });

  return graph;
}

function connectedVertices(edges) {
  //주어진 간선으로 인접 행렬 그래프를 만든다
  const graph = makeGraph(edges);
  // 섬의 개수 저장할 변수 선언
  let answer = 0;
  //방문 여부 저장할 객체
  const visited = {};
  //각각의 정점에서 갈 수 있는 정점을 탐색한다. 더 이상 탐색할 수 없으면 하나의 섬으로 취급
  for (let v = 0; v < graph.length; v++) {
    if (!visited[v]) {
      (function traversal(start) {
        graph[start].forEach((el, idx) => {
          if (el === 1 && !visited[idx]) {
            visited[idx] = true;
            traversal(idx);
          }
        });
      })(v);
      answer++;
    }
    //이전에 방문한 적 없음 && 점의 값이 1이다. => 방문할 수 있음
  }
  return answer;
}

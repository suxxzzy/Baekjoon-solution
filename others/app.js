function createMatrix(edges) {
  //주어진 edges 배열의 각 요소의 0번 ,1번 인덱스 요소 중 최대값을 찾는다.
  //그 최대값 +1 은 그래프의 가로 세로 길이가 된다.
  //그래프를 만들었으면, edges를 순회하면서 간선을 추가한다.
  //완성된 그래프를 리턴한다.
  let max = 0;
  for (let edge of edges) {
    console.log(edge.slice(0, 2));
    const [start, end] = edge.slice(0, 2);
    const temp = Math.max(start, end);
    max = Math.max(temp, max);
  }
  console.log(max, "최대값");

  const graph = new Array(max + 1)
    .fill(0)
    .map((el) => new Array(max + 1).fill(0));

  console.log(graph, "그래프");

  edges.forEach((edge) => {
    const [start, end, dir] = edge;
    if (dir === "directed") {
      graph[start][end] = 1;
    } else {
      graph[start][end] = 1;
      graph[end][start] = 1;
    }
  });

  return graph;
}

const output1 = createMatrix([
  [0, 3, "directed"],
  [0, 2, "directed"],
  [1, 3, "directed"],
  [2, 1, "directed"],
]);

console.log(output1);

///console.log(new Array(3).fill(0).map((el) => new Array(3).fill(0)));

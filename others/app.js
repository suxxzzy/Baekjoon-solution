function getDirections(matrix, from, to) {
  if (from < 0 || to < 0 || matrix.length <= from || matrix.length <= to)
    return false;
  const routes = [from];
  const visited = {};
  visited[from] = true;

  function traversal(start) {
    //출발 정점에서 갈 수 있는 모든 경로를 DFS로 탐색
    matrix[start].forEach((el, idx) => {
      if (el === 1 && !visited[idx]) {
        visited[idx] = true;
        routes.push(idx);
        traversal(idx);
      }
    });
    //단, 0인 지점이거나, 이미 방문한 지점은 방문하지 않는다.(방문 기록 남기기)
    //그 경로를 배열에 담기
  }

  traversal(from);
  //경로에 to가 포함되어 있는지의 여부를 리턴한다.
  return routes.includes(to);
}

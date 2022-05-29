class GraphWithAdjacencyList {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    if (this.vertices[vertex]) return;
    this.vertices[vertex] = [];
  }

  contains(vertex) {
    return !!this.vertices[vertex];
  }

  addEdge(fromVertex, toVertex) {
    //우선 두 정점 모두 존재해야 한다. 안 그러면 kill
    if (!this.contains(fromVertex) || !this.contains(toVertex)) return;
    //간선이 있으면 안된다.
    if (this.hasEdge(fromVertex, toVertex)) return;
    //두 정점이 다 있으면 양측에 서로 추가한다.
    this.vertices[fromVertex].push(toVertex);
    this.vertices[toVertex].push(fromVertex);
  }

  //이렇게 구현하는 것보다, 한쪽만 확인해도 되도록 구현하는 것이 효율적.
  hasEdge(fromVertex, toVertex) {
    //두 정점 중 하나라도 없다면 false
    if (!this.contains(fromVertex) || !this.contains(toVertex)) return false;
    //두 정점 존재 하지만 배열에 서로가 없다면 false
    //두 정점이 우선 존재하고, 그 정점의 배열에 서로가 있어야 한다.
    return (
      this.vertices[fromVertex].includes(toVertex) &&
      this.vertices[toVertex].includes(fromVertex)
    );
  }

  removeEdge(fromVertex, toVertex) {
    //두 정점 모두 존재하지 않으면, 또는 간선 미존재시 거부
    if (
      !this.contains(fromVertex) ||
      !this.contains(toVertex) ||
      !this.hasEdge(fromVertex, toVertex)
    )
      return;
    //위 경우 외에는 정점과 간선 모두 존재하기 때문에 삭제할 수 있다. (두 번 삭제가 필요하다)
    this.vertices[fromVertex] = this.vertices[fromVertex].filter(
      (el) => el !== toVertex
    );
    this.vertices[toVertex] = this.vertices[toVertex].filter(
      (el) => el !== fromVertex
    );
  }

  removeVertex(vertex) {
    //정점이 존재하지 않는다면 삭제 거부
    if (!this.contains(vertex)) return;
    //모든 정점을 돌면서, 각 정점과 vertex간의 간선을 삭제한다
    for (let v in this.vertices) {
      this.removeEdge(v, vertex);
    }
    //그런 다음 정점을 삭제한다
    delete this.vertices[vertex];
  }
}

const adjList = new GraphWithAdjacencyList();
adjList.addVertex("Seoul");
adjList.addVertex("Daejeon");
adjList.addVertex("Busan");

console.log(adjList);

console.log(adjList.contains("Seoul")); // true
console.log(adjList.contains("Jeonju")); // false

console.log(adjList.addEdge("Daejeon", "Seoul"));
console.log(adjList);
console.log(adjList.hasEdge("Seoul", "Daejeon")); //true

console.log(adjList.removeVertex("Seoul"));
console.log(adjList);
console.log(adjList.hasEdge("Seoul", "Daejeon")); //false

console.log(adjList);

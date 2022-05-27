class GraphWithAdjacencyMatrix {
  constructor() {
    this.matrix = [];
  }

  addVertex() {
    console.log(this.matrix, this.matrix.length);
    for (let item = 0; item < this.matrix.length; item++) {
      this.matrix[item].push(0);
    }

    this.matrix.push(new Array(this.matrix.length + 1).fill(0));
  }

  contains(vertex) {
    return vertex >= 0 && vertex < this.matrix.length;
  }

  addEdge(from, to) {
    if (this.contains(from) && this.contains(to)) {
      this.matrix[from][to] = 1;
    }
  }

  hasEdge(from, to) {
    return this.matrix[from][to] === 1;
  }

  removeEdge(from, to) {
    if (this.contains(from) && this.contains(to)) {
      this.matrix[from][to] = 0;
    }
  }
}

const adjMatrix = new GraphWithAdjacencyMatrix();
adjMatrix.addVertex();
console.log(adjMatrix.matrix, "첫번째");
adjMatrix.addVertex();
console.log(adjMatrix.matrix, "두번째");
adjMatrix.addVertex();
console.log(adjMatrix.matrix, "세번째");

let zeroExists = adjMatrix.contains(0);
console.log(zeroExists); // true
let oneExists = adjMatrix.contains(1);
console.log(oneExists); // true
let twoExists = adjMatrix.contains(2);
console.log(twoExists); // true

//유의사항: forEach보다는 for문 또는 그 이외의 배열 메서드 사용
//예외 처리 필수

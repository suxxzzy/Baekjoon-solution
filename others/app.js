let dfs = function (node) {
  //예외:
  if (!node) return;
  //그 외
  const answer = [];
  const traversal = function (start) {
    //console.log(start, "노드");
    answer.push(start.value);
    //자식이 존재한다면
    if (start.children.length) {
      for (let i = 0; i < start.children.length; i++) {
        //console.log(start.children[i], "노드자식");
        traversal(start.children[i]);
      }
    }
  };
  traversal(node);
  return answer;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
//{value: xx, children: []}, addchild라는 메소드가 있다.(배열에 요소 추가하고 추가한 아이반환)
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
//제일 먼저 root의 value를 배열에 삽입
//root의 자식이 존재한다면
//자식 노드의 value를 넣는다.
//이때 자식노드에도 자식노드가 존재한다면, 같은 과정을 반복한다.
//더 이상 다른 자식이 존재하지 않을 떄까지 위 과정을 반복한다.
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = dfs(root);
console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]

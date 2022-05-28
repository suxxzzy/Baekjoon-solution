class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value === this.value) {
      return;
    } else if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    //루트와 같으면 true
    if (value === this.value) return true;
    //루트 밑에 자식이 없으면 false
    if (this.left === null && this.right === null) return false;
    //루트보다 작으면 왼쪽으로
    if (value < this.value) {
      if (this.left !== null && value === this.left.value) return true; //* */
      if (this.left === null) return false; //* */
      return this.left.contains(value);
      //왼쪽의 값과 같니? 같으면 true
      //왼쪽 아래 자식이 하나도 없으면 false
      //왼쪽의 값보다 작니? 왼쪽의 왼쪽값과 비교
      //왼쪽의 값보다 크니? 왼쪽의 오른쪽값과 비교 ---- **부분 안 쓰면, null 값으로 인한 에러 발생한다
    }
    if (value > this.value) {
      if (this.right !== null && value === this.right.value) return true;
      if (this.right === null) return false;
      return this.right.contains(value);
    }
  }

  preorder(callback) {
    callback(this.value);
    if (this.left !== null) {
      this.left.preorder(callback);
    }
    if (this.right !== null) {
      this.right.preorder(callback);
    }
  }

  inorder(callback) {
    if (this.left !== null) {
      this.left.inorder(callback);
    }
    callback(this.value);
    if (this.right !== null) {
      this.right.inorder(callback);
    }
  }

  postorder(callback) {
    if (this.left !== null) {
      this.left.postorder(callback);
    }
    if (this.right !== null) {
      this.right.postorder(callback);
    }
    callback(this.value);
  }
}

const rootNode = new BST(10);
rootNode.insert(7);
rootNode.insert(8);
rootNode.insert(12);
rootNode.insert(11);
rootNode.left.right.value; // 8
rootNode.right.left.value; //11

let arr = [];
rootNode.inorder((value) => arr.push(value * 2));

console.log(arr);

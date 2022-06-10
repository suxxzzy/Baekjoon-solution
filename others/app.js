//9*9보드에서 다음 빈칸을 찾는 함수
const nextEmptySpot = function (board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === 0) return [row, col];
    }
  }
  return -1;
};

//주어진 숫자를 가로줄에 넣을 수 있는지 확인하는 함수
const checkRow = function (number, board, row) {
  for (let r = 0; r < board.length; r++) {
    if (board[row][r] === number) {
      return false;
    }
  }
  return true;
};

//주어진 숫자를 세로줄에 넣을 수 있는지 확인하는 함수
const checkCol = function (number, board, col) {
  for (let r = 0; r < board.length; r++) {
    if (board[r][col] === number) {
      return false;
    }
  }
  return true;
};

//주어진 숫자를 3*3영역에 넣을 수 있는지 확인하는 함수
const checkBox = function (number, board, row, col) {
  const rr = row - (row % 3);
  const cr = col - (col % 3);
  for (let r = rr; r <= rr + 3; r++) {
    for (let c = cr; c <= cr + 3; c++) {
      if (board[r][c] === number) return false;
    }
  }
  return true;
};

//주어진 숫자를 넣을 수 있는지 확인하는 함수
const isValid = function (number, board, row, col) {
  //가로줄에 넣을 수 있는가
  //세로줄에 넣을 수 있는가
  //3*3 영역에 넣을 수 있는가
  return (
    checkRow(number, board, row) &&
    checkCol(number, board, col) &&
    checkBox(number, board, row, col)
  );
};

//메인 함수
const sudoku = function (board) {
  //우선 빈칸을 찾는다.
  const es = nextEmptySpot(board);

  //재귀 탈출 조건: 빈칸이 다 채워진 보드를 리턴한다
  if (es === -1) return board;

  //재귀 조건: 빈칸이 있는 한은 계속 숫자를 채우며 검증한다
  const [row, col] = es;
  for (let n = 1; n < 10; n++) {
    //일단 해당 숫자가 빈칸에 들어갈 수 있는지를 검증해야 한다.
    if (isValid(n, board, row, col)) {
      board[row][col] = n;
      sudoku(board);
    }
  }
  //1부터 9까지 다 숫자를 하나씩 넣어보았는데도, 맞는 숫자가 하나도 없다면 이전에 숫자를 잘못 넣은 것이다.
  //이전에 넣었던 숫자를 0으로 되돌리기

  if (nextEmptySpot(board) !== -1) {
    board[row][col] = 0;
  }
  return board;
};

let board = [
  [0, 3, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];
let output = sudoku(board);
console.log(output);

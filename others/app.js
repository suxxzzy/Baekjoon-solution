function bubbelsort(arr) {
  //배열의 크기만큼 반복
  for (let i = 0; i < arr.length; i++) {
    let swap = 0;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap++;
      }
    }
    if (swap === 0) break;
  }
  return arr;
}

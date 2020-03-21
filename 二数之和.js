function SumTwoNumbers (arr, target ) {
  let len = arr.length;
  let result = [];
  for(let i = 0; i < len-1; i++) {
    for(let j = i+1; j < len; j++){
      if(arr[i] + arr[j] === target) {
        result.push(i,j);
      }
    }
  }
  return result;
}

let arr =  Array.from({length:4},x=>Array.from({length:4}),__ => 0)
let len = 4
for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i + j >= len - 1) {
        arr[i][j] = len * 2 - i - j - 1
      }
    }
  }
let temp = arr.slice(0,-1)
arr = arr.concat(temp)
arr = arr.map((item)=>{
  let temp = item.slice(0,-1)
  temp.reverse()
  return item = item.concat(temp)
})
console.log(arr)
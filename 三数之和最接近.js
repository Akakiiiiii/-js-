let k = 12 
let result  = 0
let arr = [4,2,5,7,1,9,5,3,2,78,45,234,23,3,8,6,10]
let max = Number.MAX_VALUE
arr.sort((a,b)=>{
  return a-b
})
arr = [...new Set(arr)]
for(let i = 0;i<arr.length-2;i++){
  let left = i+1
  let right = arr.length-1
  while(left < right){
    sum = arr[i] + arr[left] + arr[right]
    if(Math.pow(sum-k,2) < max) {
      max = Math.pow(sum-k,2)
      result = sum
    }
    if(sum > k){
      right--
    } else if(sum < k){
      left++
    } else if(sum ===k ) {
      break
    }
  }
}
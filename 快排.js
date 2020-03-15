function quickly(arr){
    if(!arr.length) return []
    let left = [],right=[]
    const halfIndex = Math.floor(arr.length/2)
    const halfValue = arr.splice(halfIndex,1)
    arr.forEach((item)=>{
      item < halfValue ? left.push(item) : right.push(item)
    })
    return quickly(left).concat(halfValue,quickly(right))
  }
  console.log(quickly([3.6,21.9,12.3,4]))
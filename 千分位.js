function add(num){
    num = num + ''
    num = num.split('')
    let count = 0
    for(let i = num.length-1; i>0;i--){
      count++
      if(count%3===0){
        num[i] = ',' + num[i]
      }
    }
    num = num.join('')
    return num
  }
  console.log(add(1234567))

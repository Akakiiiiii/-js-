function compareVersion(a,b){
    const cover = ['0000','000','00','0','']
    const _a = a.split('.')
    _a.forEach((item,index)=>{
      item = cover[item.length] + item
      console.log(item)
    })
    const _b = b.split('.')
    _b.forEach((item,index)=>{
      item = cover[item.length] + item
    })
    const anum = +_a.join('')
    const bnum = +_b.join('')
    return anum>bnum ? 1 : anum === bnum ? 0 : -1
  }
  console.log(compareVersion('2.3.1','2.3.1'))
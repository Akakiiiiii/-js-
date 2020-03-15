let tree = {
    value:4,
    left:{
      value:5,
      left:{
        value:3
      },
      right:{
        value:8,
        left:{
          value:1
        }
      }
    },
    right:{
      value:9,
      left:{
        value:3,
        right:{
          value:7
        }
      }
    }
  }
 function TreePath(tree,k){
    let pathN = 0
    let flag = false
    let arr = []
    function core(tree){
      if(!tree || flag) return
      pathN = pathN + tree.value
      arr.push(tree.value)
      console.log(arr)
      if(pathN === k){
        flag = true
      }
      core(tree.left)
      core(tree.right)
      if(!flag){
        pathN = pathN - tree.value
      arr.pop()
      }
    }
    core(tree)
    return arr
 }
 console.log(TreePath(tree,18))
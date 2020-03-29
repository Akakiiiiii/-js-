function dfsDistance(tree){
     let count = 0;
     if(!tree) return count
    function deep(node){
      if(!node) return 0
      let leftDeep = deep(node.left)
      let rightDeep = deep(node.right)
      count = Math.max(leftDeep+rightDeep,count)
      return Math.max(leftDeep,rightDeep)+1
    }
    deep(tree)
    return count
   }
   console.log(dfsDistance({
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: {
        value: 6
      }
    },
    right: {
      value: 4
    }
  },
  right: {
    value: 5
  }
}))
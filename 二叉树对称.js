

function jgTree(left,right){
    if(!left&&!right) return true
    if(!left||!right) return false
    if(left.value!=right.value)
    if(left.value === right.value){
        return jgTree(left.left,right.right) && jgTree(left.right,right.left)
    }
}

jgTree(tree.left,tree.right)
function jgCycle(node) {
    let set = new Set()
    while(node){
        if(set.has(node)) return true
        set.add(node)
        node = node.next
    }
    return false
}

function jgCycle2(node){
    let p = node,q = node.next
    while(p!=q){
        if(!q || !p) return false
        p=p.next
        q=q.next.next
    }
    return true
}
function ReverseList(pHead)
{
    var node=pHead, arr=[];
    while(node!=null){
        arr.push(node.val);
        node=node.next;
    }
    node = pHead;
    while(node!=null){
        node.val = arr.pop();
        node = node.next;
    }
    return pHead;
}

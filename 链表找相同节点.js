let obj = {
    value:2,
    next:{
      value:3,
      next:null
    }
  }
  let link1 = {
    value:3,
    next:{
      value:5,
      next:obj
    }
  }
  let link2 = {
    value:2,
    next:obj
  }
  function linkLength(head){
    let count = 0;
    if(!head.next) return count
    while(head){
      head = head.next
      count++
    }
    return count
  }
  function linkList(head1,head2){
  const head1Length = linkLength(head1)
  const head2Length = linkLength(head2)
  let long = head1Length - head2Length >= 0 ? head1 :head2
  let longLength = head1Length - head2Length >= 0 ? head1Length :head2Length
  let short = head1Length - head2Length < 0 ? head1 : head2
  let shortLength = head1Length - head2Length < 0 ? head1Length :head2Length
  const distance = longLength - shortLength
  for(let i = 0;i<distance;i++){
    long = long.next
  }
  while(long&&long!=short){
    long = long.next
    short = short.next
  }
  return long ? long :false
  }
  console.log(linkList(link1,link2))
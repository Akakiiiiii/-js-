  let link1 = {
    value:1,
    next:{
      value:2,
      next:{
        value:3,
        next:null
      }
    }
  }
  let link2 = {
    value:2,
    next:{
      value:3,
      next:{
        value:4,
        next:null
      }
    }
  }
  function linkList(link1,link2){
    if(!link1) return link2
    if(!link2) return link1
    let head = {}
    if(link1.value <= link2.value){
      head = {...link1}
      head.next = linkList(link1.next,link2)
    }else{
      head = {...link2}
      head.next = linkList(link1,link2.next)
    }
    return head
  }
  console.log(linkList(link1,link2))
let s = "abpcplea", d = ["ale","apple","monkey","plea"]
d.sort((a,b)=>b.length-a.length)
let count = 0
function seacher(){
  for(item of d){
  for(i of s){
    if(i === item[count]){
      count++
    } else if(count === item.length){
      return item
    }
  }
}
return false
}
function seracher(s1,s2){
    if(s1.length<s2){
      let temp = s1
      s1 = s2
      s2 = temp
    }
    for(let i = s1.length-1;i>=0;i--){
      for(let j = 0;j<s1.length-i;j++){
        if(s1.includes(s2.substr(j,i+1))){
          return s2.substr(j,i+1)
        }
      }
    }
  }
  console.log(seracher('abcdcd','abcdcreadcd'))

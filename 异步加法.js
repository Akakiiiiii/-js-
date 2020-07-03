function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 100);
}
  async function sum(...args){
    if(args.length>1){
      let result = await new Promise((resolve)=>{
        asyncAdd(args[0],args[1],(err,result)=>{
          if(!err){
            resolve(result)
          }
        })
    })
    return sum(result,...args.slice(2))
    }
    return args[0]
  }
  console.log(sum(1,2,3,4,5))

function zhaon(nums,n,sum){
    if(n>0&&nums.length){
      return zhaon(nums.slice(1),n-1,sum-nums[0]) || zhaon(nums.slice(1),n,sum)
    }
    else if(n<0){
      return false
    }
    else if(n===0&&sum===0){
      return true
    }
    return false
  }
  console.log(zhaon([1,2,3,4,5,6,7],3,14))

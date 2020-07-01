function huizong(nums){
        let set = new Set(nums)
        let result = []
        for(let i = 0;i<nums.length;i++){
            if(set.has(nums[i]-1)){
                continue
            }
            else if(set.has(nums[i]+1)){
                let arr = [nums[i]]
                while(set.has(nums[i]+1)){
                    arr.push(nums[i+1])
                    i += 1
                }
                result.push(arr)
            }
            else{
                result.push(nums[i])
            }
        }
        result = result.map((item)=>{
            if(Array.isArray(item)){
                return item[0]+'->'+item.pop()
            }else{
                return item+''
            }
        })
        return result
    }
    console.log(huizong([0,2,3,4,6,8,9]))

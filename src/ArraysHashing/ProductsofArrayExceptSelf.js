function ProductsofArrayExceptSelf(nums) {
  let resultArray = []
  for (let i = 0; i < nums.length; i++) {
    let eachValueProduct = 1
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue
      eachValueProduct *= nums[j] 
    }

    resultArray.push(eachValueProduct == -0 ? 0 : eachValueProduct)
  }
  return resultArray
}

let nums = [1, 2, 4, 6]
nums =  [-1,0,1,2,3]
console.log(ProductsofArrayExceptSelf(nums));


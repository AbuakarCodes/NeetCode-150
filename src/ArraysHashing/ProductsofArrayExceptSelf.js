
// brutr force O(N^2)
// function ProductsofArrayExceptSelf(nums) {
//   let resultArray = []
//   for (let i = 0; i < nums.length; i++) {
//     let eachValueProduct = 1
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) continue
//       eachValueProduct *= nums[j]
//     }

//     resultArray.push(eachValueProduct == -0 ? 0 : eachValueProduct)
//   }
//   return resultArray
// }


/*
* WHY THIS CODE IS O(N^2):
1): Doing it 1 time (multiplying the whole subarray using .slice() and .reduce()) takes $O(N)$ time.
2): Doing it every iteration (repeating that whole product calculation $N$ times inside the loop) makes it $O(N \times N) = O(N^2)$ overall.

function ProductsofArrayExceptSelf(nums) {
    let returnArray =[]
  let left = []
  let right = []

  // Left
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      left.push(1)
      continue
    }
    let multiplicationSubArray = nums.slice(0, i).reduce((acc, num) => acc * num, 1)
    left.push(multiplicationSubArray)
  }

  // right
  for (let i = 0; i < nums.length; i++) {

    let multiplicationSubArray = nums.slice(i+1, nums.length).reduce((acc, num) => acc * num, 1)
    right.push(multiplicationSubArray)
  }

  // multiplying
  for (let i = 0; i < nums.length; i++) {
    returnArray.push(left[i] * right[i] )
  }

  return returnArray

}
  */


function ProductsofArrayExceptSelf(nums) {
  let returnArray = []
  let left = []
  let right = []

  // Left
  left[0] = 1
  for (let i = 1; i < nums.length; i++) {
    left[i] = (left[i - 1] * nums[i - 1])
  }

  // right
  right[nums.length -1] = 1
  for (let i = nums.length -2; i >= 0; i--) {
    right[i] = (right[i + 1] * nums[i + 1]); 
  }

  // multiplying
  for (let i = 0; i < nums.length; i++) {
    returnArray.push(left[i] * right[i])
  }

  return returnArray
}

// multiply the whole array and then divide it with

let nums = [1, 2, 4, 6]
nums = [-1,0,1,2,3]

console.log(ProductsofArrayExceptSelf(nums))

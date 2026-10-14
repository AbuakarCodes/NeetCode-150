// function threeSum(nums) {
//   let stringCombo = new Set()
//   let returnArray = []
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] == 0) {
//           stringCombo.add([nums[i], nums[j], nums[k]].sort().join(","))
//         }
//       }
//     }
//   }
//   stringCombo.forEach((e) => returnArray.push(e.split(",").map(Number)))
//   return returnArray
// }

function threeSum(nums) {
  nums.sort((a, b) => a - b)
  let stringCombo = new Set()
  let returnArray = []

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else if (sum == 0) {
        stringCombo.add([nums[i], nums[left], nums[right]].join(","))
        left++
        right--
      }
    }
  }

  stringCombo.forEach((e) => returnArray.push(e.split(",").map(Number)))
  return returnArray
}

let nums = [-1, 0, 1, 2, -1, -4]

console.log(threeSum(nums))

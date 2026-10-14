function threeSum(nums) {
  let stringCombo = new Set()
  let returnArray = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          stringCombo.add([nums[i], nums[j], nums[k]].sort().join(","))
        }
      }
    }
  }
  stringCombo.forEach((e) => returnArray.push(e.split(",")))
  return returnArray
}

let nums = [-1, 0, 1, 2, -1, -4]

console.log(threeSum(nums))

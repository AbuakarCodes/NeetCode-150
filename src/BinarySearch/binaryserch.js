function search(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] > target) right = mid - 1
    else if (nums[mid] < target) left = mid + 1
    else return nums[mid]
  }

  return -1
}

console.log(search([-1, 0, 2, 4, 6, 8], 4))

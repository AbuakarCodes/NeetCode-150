function BinarySearch(nums, target) {

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

// console.log(BinarySearch([-1, 0, 2, 4, 6, 8], 4))

function searchMatrix(matrix, target) {
  let targetArray = null

  for (let i = 0; i < matrix.length; i++) {
    const array = matrix[i]
    let lastElement = array.length - 1

    if (i === matrix.length - 1 && target > array[lastElement]) return false
    else if (target === array[lastElement]) return true
    else if (target < array[lastElement]) {
      targetArray = i
      break
    }
  }

  let result = BinarySearch(matrix[targetArray], target)
  return result == -1 ? false : true
}

let matrix = [
  [1, 2, 4, 8],
  [10, 11, 12, 13],
  [14, 20, 30, 40],
]

let target = 6

console.log(searchMatrix(matrix, target))

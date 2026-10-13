function maxArea(heights) {
  let waterAmounts = []

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
      let height = Math.min(heights[i], heights[j])
      let width = j - i
      waterAmounts.push(height * width)
    }
  }
  return Math.max(...waterAmounts)
}

let height = [1, 7, 2, 5, 4, 7, 3, 6]
// height = [2, 2, 2]
// console.log(maxArea(height))

function maxwater(heights) {
  let waterAmounts = [0]
  let left = 0
  let right = heights.length - 1

  while (left < right) {
    let height = Math.min(heights[left], heights[right])
    let width = right - left

    waterAmounts.push(height * width)

    if (heights[left] <= heights[right]) {
      left++
    } else {
      right--
    }
  }

  return Math.max(...waterAmounts)
}

console.log(maxwater(height))

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


// function TapWater(height) {
//   let trappedWater = 0
//   for (let i = 0; i < height.length; i++) {
//     let leftMax = Math.max(...height.slice(0, i))
//     let rightMax = Math.max(...height.slice(i + 1))

//     if (leftMax > height[i] && rightMax > height[i]) {
//       trappedWater += Math.min(leftMax, rightMax) - height[i]
//     }
//   }
//   return trappedWater
// }

function TapWater(height) {
  let gratest = 0
  let leftMaxArray = []
  let rightMaxArray = []
  let waterCount = 0

  // to find Left Max
  for (let i = 0; i < height.length; i++) {
    if (i == 0) {
      leftMaxArray.push(0)
      continue
    }
    if (height[i - 1] > gratest) gratest = height[i - 1]
    leftMaxArray.push(gratest)
  }

  gratest = 0
  for (let i = height.length - 1; i >= 0; i--) {
    if (i == height.length - 1) {
      rightMaxArray[i] = 0
      continue
    }
    if (height[i + 1] > gratest) gratest = height[i + 1]
    rightMaxArray[i] = gratest
  }

  height.forEach((_, i) => {
    waterCount += Math.max(0, Math.min(leftMaxArray[i], rightMaxArray[i]) - height[i])
  })



  return waterCount
}

let height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1]
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

console.log(TapWater(height))

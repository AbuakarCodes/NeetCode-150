function TapWater(height) {
  let trappedWater = 0
  for (let i = 0; i < height.length; i++) {
    let leftMax = Math.max(...height.slice(0, i))
    let rightMax = Math.max(...height.slice(i + 1))

    if (leftMax > height[i] && rightMax > height[i]) {
      trappedWater += Math.min(leftMax, rightMax) - height[i]
    }
  }
  return trappedWater
}

let height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1]
console.log(TapWater(height))

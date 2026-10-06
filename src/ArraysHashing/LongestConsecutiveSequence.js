// function longestConsecutive(nums) {
//   let sortedNums = nums.sort((a, b) => a - b)
//   let secquenceCount = 1

//   for (let index = 0; index <= sortedNums.length - 2; index++) {
//     if (sortedNums[index] + 1 == sortedNums[index + 1]) secquenceCount += 1
//     else if (sortedNums[index] == sortedNums[index + 1]) continue
//   }
//   return secquenceCount == 1 ? (secquenceCount = 0) : secquenceCount
// }

function longestConsecutive(nums) {
  let set = new Set(nums)
  let longest = 0

  for (const num of set) {
    if (!set.has(num - 1)) {
      let length = 1
      let current = num

      while (set.has(current + 1)) {
        current +=1
        length += 1
      }

      longest = Math.max(longest, length)

    }
  }

  return longest
}

let nums = [2, 20, 4, 10, 3, 4, 5]
nums = [0, 3, 2, 5, 4, 6, 1, 1]
nums = [0,0]
console.log(longestConsecutive(nums))

function topKFrequent(nums, k) {
  let returnArray = []
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == undefined) hash[nums[i]] = 1
    else hash[nums[i]] += 1
  }

  let sortedHash_Array = Object.entries(hash).sort((a, b) => b[1] - a[1])

  for (let i = 0; i < k; i++) {
    returnArray.push(Number(sortedHash_Array[i][0]))
  }

  return returnArray
}

let nums = [1, 2, 2, 3, 3, 3]
let k = 2

console.log(topKFrequent(nums, k))

function hasDuplicate(nums) {
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == undefined) hash[nums[i]] = 1
    else hash[nums[i]] += 1
  }
  let hashKeys = Object.keys(hash)

  for (let j = 0; j < hashKeys.length; j++) {
    console.log(hash[hashKeys[j]])
    if (hash[hashKeys[j]] > 1) return true
  }
  return false
}
console.log(hasDuplicate([1,2,3,4,45,5,5,6,6,6]));
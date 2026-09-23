import { isAnagram } from "./ValidAnagram.js"

function groupAnagrams(strs) {
  let outPut = []
  let alreadyIncluded = []

  for (let i = 0; i < strs.length; i++) {
    let tempArray = []
    for (let j = 0; j < strs.length; j++) {
      if (alreadyIncluded.includes(j)) continue
      if (strs[i].length === strs[j].length) {
        if (isAnagram(strs[i], strs[j])) {
          alreadyIncluded.push(j)
          tempArray.push(strs[j])
        }
      }
    }
    if (tempArray.length >= 1) outPut.push(tempArray)
  }
  return outPut
}

let strs = ["act","pots","tops","cat","stop","hat"]
strs = ["HH","HH","HH"]

console.log(groupAnagrams(strs))


function LongestSubstring(s) {
  let set = new Set()
  let substringLengths = []
  let subStringL = 0

  for (let i = 0; i < s.length; i++) {
    set.clear()
    subStringL = 0

    for (let j = i; j < s.length; j++) {
      const element = s[j]
      if (set.has(element)) break
      else {
        set.add(element)
        subStringL++
      }
    }

    substringLengths.push(subStringL)
  }
  return Math.max(0, ...substringLengths)
}

let s = "zxyzxyz"
s = "aSSSS"
s = "xxx"
s = "S"
// s = "abcabcbb"
// s = "abc"

console.log(LongestSubstring(s))

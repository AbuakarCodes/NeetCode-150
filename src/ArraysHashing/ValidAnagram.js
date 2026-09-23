//  function isAnagram(s, t) {
//   let hash_S = {}
//   let hash_T = {}

//   for (let i = 0; i < s.length; i++) {
//     if (hash_S[s[i]] == undefined) hash_S[s[i]] = 1
//     else hash_S[s[i]] += 1
//   }
//   let hash_SKey = Object.keys(hash_S).sort()

//   for (let i = 0; i < t.length; i++) {
//     if (hash_T[t[i]] == undefined) hash_T[t[i]] = 1
//     else hash_T[t[i]] += 1
//   }
//   let hash_TKey = Object.keys(hash_T).sort()

//   if (hash_SKey.join("") != hash_TKey.join("")) return false

//   for (let i = 0; i < s.length; i++) {
//     if (hash_S[hash_SKey[i]] != hash_T[hash_TKey[i]]) return false
//   }

//   return true
// }

//  function isAnagram(s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("")
// }

export function isAnagram(s, t) {
  if (typeof s != "string" || typeof t != "string") throw new Error("Argumrnt must be string")

  if (s.length != t.length) return false

  let decissionArray = new Array(26).fill(0)

  let string1 = s.toLowerCase()
  let string2 = t.toLowerCase()

  for (let i = 0; i < s.length; i++) {
    decissionArray[string1.charCodeAt(i) - 97]++
    decissionArray[string2.charCodeAt(i) - 97]--
  }

  for (let i = 0; i < decissionArray.length; i++) {
    if (decissionArray[i] !== 0) return false
  }

  return true

}

let s = "racecar"
let t = "racecar"
console.log(isAnagram(s, t))

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

export function isAnagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("")
}

let s = "racecar"
let t = "carraced"
console.log(isAnagram(s, t))


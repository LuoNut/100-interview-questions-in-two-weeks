
/**
 * @description 对称数
 * @author luo
 */



/**
 * 查询 1 - max 的对称数 (数组反转)
 * @param n max
 */
export function findPalindromeNumber1(n: number): number[] {
  let res: number [] = []
  if(n <= 0) return res

  for(let i = 1; i <= n; i++) {
    //将 i 转换成字符串,再转换成数组,再反转,进行比较
    let s = i.toString()

    if(s === s.split('').reverse().join('')) {
      res.push(i)
    }
  }
  
  return res
}

/**
 * 查询1 - max 的对称数 (字符串首尾比较)
 * @param n max
 */
export function findPalindromeNumber2(n: number): number[] {
  let res: number[] = []
  if (n <= 0) return []

  for (let i = 1; i <= n; i++) {
    let s = i.toString()

    let startIndex = 0
    let endIndex = s.length - 1
    let temp = true

    while (startIndex < endIndex) {
      if (s[startIndex] !== s[endIndex]) {
        temp = false
        break
      } else {
        startIndex ++
        endIndex --
      }
    }
    if(temp) res.push(i)

  }
  return res
}  

export function findPalindromeNumber3(n: number): number[] {
  let res: number[] = []
  if(n <= 0) return res

  for(let i = 1; i <= n; i++) {
    let num = i
    let rev = 0

    while(num > 0) {
      rev = rev * 10 + num % 10
      num = Math.floor(num / 10)
    }

    if(i === rev) res.push(i)
  }

  return res
}

console.log(findPalindromeNumber3(200));

/**
 * 千分位格式化（使用数组）
 * @param n number
 */
export function thousandsFormat1(n: number): string {
  //只考虑整数
  n = Math.floor(n)

  let s = n.toString()
  let arr = s.split('').reverse()

  return arr.reduce((prev, val, index) => {
    if(index % 3 === 0) {
      if(prev) {
        return val + ',' + prev
      }else {
        return val
      }
    }else {
      return val + prev
    }
  }, '')
}

/**
 * 千分位格式化（字符串分析）
 * @param n number
 */
export function thousandsFormat2(n: number): string {
  n = Math.floor(n)

  let res = ''
  let s = n.toString()
  let length = s.length

  for (let i = length - 1; i >= 0; i--) {
    let j = length - i
    if (j % 3 === 0) {
      if (i === 0) {
        res = s[i] + res
      } else {
        res = ',' + s[i] + res
      }
    } else {
      res = s[i] + res
    }
  }

  return res
}

// console.info(thousandsFormat1(104038047048))
// console.info(thousandsFormat2(104038047048))
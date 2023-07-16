/**
 * @description 数组扁平化
 * 
 */


/**
 * 数组扁平化 push
 * @param arr arr
 */
export function arrayFlatten1(arr: any[]): any[] {
  let res: any[] = []

  arr.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(n => res.push(n))
    } else {
      res.push(item)
    }
  })

  return res
}

/**
 * 数组扁平化 concat
 * @param arr arr
 */
export function arrayFlatten2(arr: any[]): any[] {
  let res: any[] = []

  arr.forEach(item => {
    res = res.concat(item)
  })

  return res
}

let arr = [1, 2, [3, 4, [5]], 6, 7 ]
console.info(arrayFlatten2(arr))
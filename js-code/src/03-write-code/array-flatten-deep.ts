/**
 * @description 数组深度扁平化
 * 
 */

/**
 * 数组深度扁平化 push
 * @param arr
 */
export function flattenDeep1(arr: any[]): any[] {
  let res: any[] = []

  arr.forEach(item => {
    if (Array.isArray(item)) {
      let flatItem = flattenDeep1(item)
      flatItem.forEach(n => res.push(n))
    } else {
      res.push(item)
    }
  })

  return res
}

export function flattenDeep2(arr: any[]): any[] {
  let res: any[] = []

  arr.forEach(item => {
    if (Array.isArray(item)) {
      let flatItem = flattenDeep2(item)
      flatItem.forEach(n => res.push(n))
    } else {
      res.push(item)
    }
  })

  return res
}


let arr = [1, 2, [3, 4, [5, [100, 200]]], 6, 7 ]
console.info(flattenDeep2(arr))
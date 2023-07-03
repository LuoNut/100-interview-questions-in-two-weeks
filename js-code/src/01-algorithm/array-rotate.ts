/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2023-07-02 15:10:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-07-02 15:36:43
 */

/**
 * 旋转数组k步 - 使用pop和unshift
 * @param arr arr
 * @param k k
 * @returns arr
 */
export function rotate1(arr: number[], k: number): number[] {
  const length = arr.length
  if (!k || arr.length === 0) return arr

  const step = Math.abs(k % length)

  for (let i = 0; i < step; i++) {
    const n = arr.pop()
    if (n) {
      arr.unshift(n)
    }
  }
  return arr
}

/**
 * 旋转数组k步 - 使用concat
 * @param arr arr
 * @param k 
 */
export function rotate2(arr: number[], k: number): number[] {
  const length = arr.length
  if (!length || k === 0) return arr
  let step = Math.abs(k % length)

  let part1 = arr.slice(-step)
  let part2 = arr.slice(0, length - step)
  let part3 = part1.concat(part2)

  return part3
  
}

const arr = [1,2,3,4,5,6,7]
const arr2 = rotate2(arr, 3)
console.info(arr2)

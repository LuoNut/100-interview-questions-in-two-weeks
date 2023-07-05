/**
 * @description 二分查找
 * @author luo
 */

import { binarySearch1, binarySearch2 } from "./binary-search";

describe('二分查找', () => {
  it('正常情况', () => {
    let arr = [10, 20, 30, 40, 50]
    let num = 20
    expect(binarySearch2(arr, num)).toBe(1)
  })

  it('空数组', () => {
    expect(binarySearch2([], 20)).toBe(-1)
  })

  it('找不到 tagget', () => {
    let arr = [10, 20, 30, 40, 50]
    let num = 202
    expect(binarySearch2(arr, num)).toBe(-1)
  })
})
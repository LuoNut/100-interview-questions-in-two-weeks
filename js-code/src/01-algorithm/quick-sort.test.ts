/**
 * @description 快速排序 test
 */

import { quickSort1, quickSort2 } from "./quick-sort";

describe('快速排序', () => {
  it('正常情况', () => {
    let arr = [1, 6, 2, 7, 3, 8, 4, 9, 5]
    const res = quickSort2(arr)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('有负数', () => {
    let arr = [-1, -3, 5, -6]
    let res = quickSort2(arr)
    expect(res).toEqual([-6, -3, -1, 5])
  })

  it('数组元素都一样', () => {
    let  arr = [2, 2, 2, 2]
    expect(quickSort2(arr)).toEqual([2, 2, 2, 2])
  })

  it('空数组', () => {
    expect(quickSort2([])).toEqual([])
  })
}) 
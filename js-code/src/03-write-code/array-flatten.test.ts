/**
 * @description 数组扁平化
 * 
 */

import { arrayFlatten1, arrayFlatten2 } from "./array-flatten";

describe("数组扁平化", () => {
  it('空数组', () => {
    let res = arrayFlatten2([])
    expect(arrayFlatten2(res)).toEqual([])
  })

  it('非嵌套数组', () => {
    let arr = [1, 2, 3, 4, 5]
    let res = arrayFlatten2(arr)
    expect(res).toEqual([1, 2, 3, 4, 5])
  })

  it('一级嵌套数组', () => {
    let arr = [1, 2, 3, [100, 200], 4, 5]
    let res = arrayFlatten2(arr)
    expect(res).toEqual([1, 2, 3, 100, 200, 4, 5])
  })

  it('二级非嵌套数组', () => {
    let arr = [1, 2, 3, [100, [300], 200], 4, 5]
    let res = arrayFlatten2(arr)
    expect(res).toEqual([1, 2, 3, 100, [300], 200, 4, 5])
  })
})
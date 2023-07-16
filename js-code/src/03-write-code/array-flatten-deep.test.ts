/**
 * @description 数组深度扁平化 test
 */

import { flattenDeep1, flattenDeep2 } from "./array-flatten-deep";

describe('数组深度扁平化', () => {
  it('空数组', () => {
    let res = flattenDeep2([])
    expect(flattenDeep2(res)).toEqual([])
  })

  it('非嵌套数组', () => {
    let arr = [1, 2, 3, 4, 5]
    let res = flattenDeep2(arr)
    expect(res).toEqual([1, 2, 3, 4, 5])
  })

  it('一级嵌套数组', () => {
    let arr = [1, 2, 3, [100, 200], 4, 5]
    let res = flattenDeep2(arr)
    expect(res).toEqual([1, 2, 3, 100, 200, 4, 5])
  })

  it('二级嵌套数组', () => {
    let arr = [1, 2, 3, [100, 300, 200], 4, 5]
    let res = flattenDeep2(arr)
    expect(res).toEqual([1, 2, 3, 100, 300, 200, 4, 5])
  })

  it('三级嵌套数组', () => {
    let arr = [1, 2, 3, [100, [300, 'a', 'b'], 200], 4, 5]
    let res = flattenDeep2(arr)
    expect(res).toEqual([1, 2, 3, 100, 300, 'a', 'b', 200, 4, 5])
  })
})
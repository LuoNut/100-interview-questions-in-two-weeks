/**
 * @description 移动数组中的 0 至末尾
 */

import { moveZero1,moveZero2 } from "./move-zero";

describe('移动数组中的 0 至末尾', () => {
  it('正常情况', () => {
    let arr =  [1, 3, 5, 2, 0, 6, 0, 0, 0, 4]
    moveZero2(arr)
    expect(arr).toEqual([1, 3, 5, 2, 6, 4, 0, 0, 0, 0])
  })

  it('没有 0', () => {
    let arr = [1, 3, 4, 5, 2, 4, 5, 5]
    moveZero2(arr)
    expect(arr).toEqual([1, 3, 4, 5, 2, 4, 5, 5])
  })

  it('全是 0', () => {
    let arr = [0, 0, 0, 0, 0, 0]
    moveZero2(arr)
    expect(arr).toEqual([0, 0, 0, 0, 0, 0])
  })
})

import { findTwoNumber1, findTwoNumber2 } from "./two-numbers-sum";

describe('两数之和', () => {
  it('正常情况', () => {
    let num = [1, 2, 4, 7, 11, 15]
    let res = findTwoNumber2(num, 15)
    expect(res).toEqual([4, 11])
  })

  it('空数组', () => {
    let res = findTwoNumber2([], 15)
    expect(res).toEqual([])
  })

  it('找不到', () => {
    let num = [1, 2, 4, 7, 11, 15]
    let res = findTwoNumber2(num, 100)
    expect(res).toEqual([])
  })
})
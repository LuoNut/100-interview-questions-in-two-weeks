/**
 * @description 寻找最多的连续字符
 * @author luo
 */

import { continuousChar, continuousChar2 } from "./continuous-char";

describe('寻找最多的连续字符', () => {
  it('正常情况', () => {
    let str = 'aabbcccddeeee11222333'
    let res = continuousChar2(str)
    expect(res).toEqual({char: 'e', length: 4})
  })

  it('空字符串', () => {
    expect(continuousChar2('')).toEqual({char: '', length: 0})
  })

  it('无连续字符串', () => {
    let str = 'abcde'
    let res = continuousChar2(str)
    expect(res).toEqual({char: 'a', length: 1})
  })

  it('只有连续字符串', () => {
    let str = "aaaa"
    expect(continuousChar2(str)).toEqual({char: 'a', length: 4})
  })
})
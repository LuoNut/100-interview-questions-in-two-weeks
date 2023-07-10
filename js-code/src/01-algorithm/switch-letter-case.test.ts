/**
 * @description 切换字母大小写
 * @author luo
 */

import { switchLetterCase1, switchLetterCase2 } from "./switch-letter-case";

describe('切换字母大小写', () => {
  it('正常情况', () => {
    let str = 'aSd34JkJ$faS34'
    expect(switchLetterCase2(str)).toBe('AsD34jKj$FAs34')
  })

  it('空字符串', () => {
    expect(switchLetterCase2('')).toBe('')
  })

  it('没有字符', () => {
    expect(switchLetterCase2("1000")).toBe('1000')
  })
})
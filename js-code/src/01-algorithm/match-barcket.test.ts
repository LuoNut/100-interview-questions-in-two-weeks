/**
 * @description 括号匹配 test
 * @author luo
 */

import { matchBarcket } from "./match-bracket";

describe('括号匹配', () => {
  it('正常情况', () => {
    const str = '(a{b[c[]d]e})'
    const res = matchBarcket(str)
    expect(res).toBe(true)
  })

  it('不匹配', () => {
    const str = '(a{b[c[d]e})'
    const res = matchBarcket(str)
    expect(res).toBe(false)
  })

  it('顺序不一致', () => {
    const str = '(a{b[c]d)e}'
    const res = matchBarcket(str)
    expect(res).toBe(false)
  })

  it('控字符串', () => {
    const str = ''
    const res = matchBarcket(str)
    expect(res).toBe(true)
  })

})

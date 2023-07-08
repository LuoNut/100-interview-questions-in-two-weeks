/**
 * @description 对称数
 * @author luo
 */
import { findPalindromeNumber1, findPalindromeNumber2, findPalindromeNumber3 } from "./palindrome-number";

fdescribe('对称数', () => {
  it('正常情况', () => {
    let res = findPalindromeNumber3(200)
    expect(res.length).toBe(28)
  })

  it('max 小于等于 0', () => {
    let res = findPalindromeNumber3(-1)
    expect(res).toEqual([])
  })
})
/**
 * @description 数组千分格式化
 * @author luo
 */

import { thousandsFormat1, thousandsFormat2 } from "./thousands-format";

describe('数组千分未格式化', () => {
  it('正常情况', () => {
    let n = 10403405502
    expect(thousandsFormat2(n)).toBe('10,403,405,502')
  })

  it('小于 1000', () => {
    expect(thousandsFormat2(0)).toBe('0')
    expect(thousandsFormat2(100)).toBe('100')
  })
})
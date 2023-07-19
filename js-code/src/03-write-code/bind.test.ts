/**
 * @description 构建bing test
 */

import './bind'

describe('自定义bind', () => {
  it('绑定参数', () => {
    function f1(this: any) {
      return this
    }
    //@ts-ignore
    let fn1 = f1.customBind({a: 100})
    expect(fn1()).toEqual({a: 100})
  })

  it('绑定参数', () => {
    function fn(a: number, b: number, c: number) {
      return a + b + c
    }
    //@ts-ignore
    let fn1 = fn.customBind(null, 100, 200)
    expect(fn1(300)).toBe(600)
  })
})
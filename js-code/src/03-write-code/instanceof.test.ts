/**
 * @description 自定义 instanceof test
 */

import { myInstanceof } from "./instanceof";

describe('自定义 instanceof', () => {
  it('null undefiend', () => {
    let res1 = myInstanceof(null, Object)
    expect(res1).toBe(false)
    let res2 = myInstanceof(undefined, Object)
    expect(res2).toBe(false)
  })

  it('值类型', () => {
      let res1 = myInstanceof(100, Number)
      expect(res1).toBe(false)
      let res2 = myInstanceof("abc", String)
      expect(res2).toBe(false)
  })

  it('引用类型', () => {
    let res1 = myInstanceof([], Array)
    expect(res1).toBe(true)
    let res2 = myInstanceof({}, Object)
    expect(res2).toBe(true)
    let res3 = myInstanceof({}, Array)
    expect(res3).toBe(false)
  })

  it('函数', () => {
    let fn = () => {}
    let res1 = myInstanceof(fn, Function)
    expect(res1).toBe(true)
  })

  it('自定义', () => {
    class Foo {}
    let f = new Foo()
    let res1 = myInstanceof(f, Foo)
    expect(res1).toBe(true)

    let res2 = myInstanceof(f, Object)
    expect(res2).toBe(true)
  })
})
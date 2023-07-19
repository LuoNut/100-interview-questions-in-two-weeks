/**
 * @description 构建call apply
 */


import "./call-apply";

describe('构建 call', () => {
  it('绑定 this - 对象', () => {
    function fn(this: any) {
      return this
    }
    //@ts-ignore
    let res1 = fn.customCall({x: 100})
    expect(res1).toEqual({x: 100})
  })

  it('绑定 this - 值类型', () => {

    function fn(this: any) {
      return this
    }

    //@ts-ignore
    let res1 = fn.customCall('abc')
    expect(res1.toString()).toBe('abc')

    //@ts-ignore
    let res2 = fn.customCall(null)
    expect(res2).not.toBeNull()
  })

  it('绑定参数', () => {
    function fn(a: number, b: number) {
      return a + b
    }

    //@ts-ignore
    let res1 = fn.customCall(null, 10, 20)
    expect(res1).toEqual(30)
  })
})  

describe('构建 apply', () => {
  it('绑定 this - 对象', () => {
    function fn(this: any) {
      return this
    }
    //@ts-ignore
    let res1 = fn.customApply({x: 100})
    expect(res1).toEqual({x: 100})
  })

  it('绑定 this - 值类型', () => {

    function fn(this: any) {
      return this
    }

    //@ts-ignore
    let res1 = fn.customApply('abc')
    expect(res1.toString()).toBe('abc')

    //@ts-ignore
    let res2 = fn.customApply(null)
    expect(res2).not.toBeNull()
  })

  it('绑定参数', () => {
    function fn(a: number, b: number) {
      return a + b
    }

    //@ts-ignore
    let res1 = fn.customApply(null, [10, 20])
    expect(res1).toEqual(30)
  })
})  
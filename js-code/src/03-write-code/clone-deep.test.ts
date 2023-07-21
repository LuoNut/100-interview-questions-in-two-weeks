/**
 * @description 深拷贝
 * 
 */

import { cloneDeep } from "./clone-deep";

describe('深拷贝', () => {
  it('值类型', () => {
    expect(cloneDeep(100)).toBe(100)
    expect(cloneDeep('abc')).toBe('abc')
    expect(cloneDeep(null)).toBe(null)
  })

  it('普通对象和数组', () => {
    let obj = {
      name: '哈哈哈',
      info: {
        city: '北京'
      },
      arr: [100, 200, 300]
    }
    const obj1 = cloneDeep(obj)
    obj1.info.city = '上海'

    expect(obj.info.city).toBe('北京')
    expect(obj.arr).toEqual([100, 200, 300])
  })

  it('Map', () => {
    const n1 = new Map([['x', 100], ['y', 200]])
    const n2 = cloneDeep(n1)

    expect(n2.size).toBe(2)

    const obj = {
      map: new Map([['x', 100], ['y', 200]])
    }

    const obj1 = cloneDeep(obj)
    expect(obj1.map.size).toBe(2)
  })

  it('Set', () => {
    const n1 = new Set([100, 200, 300])
    const n2 = cloneDeep(n1)

    expect(n2.size).toBe(3)

    const obj = {
      set: new Set([100, 200, 300])
    }

    const obj1 = cloneDeep(obj)
    expect(obj1.set.size).toBe(3)
  })

  it('循环引用', () => {
    let a:any = {
      x: 100
    }
    a.self = a

    const b = cloneDeep(a)
    expect(b.self).toBe(b)
  })
})
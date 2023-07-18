/**
 * @description new 的过程
 */

import { customNwe } from "./new";

describe('自定义 new', () => {
  it('new', () => {
    class FOO {
      //属性
      name: string
      city: string
    
      constructor(name: string) {
        this.name = name
        this.city = '北京'
      }
    
      getName() {
        return this.name
      }
    }

    const f = customNwe<FOO>(FOO, 'luo')

    expect(f.name).toBe('luo')
    expect(f.city).toBe('北京')
    expect(f.getName()).toBe('luo')

  })
})
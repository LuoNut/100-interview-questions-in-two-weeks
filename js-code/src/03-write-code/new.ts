/**
 * @description new的过程
 */

export function customNwe<T>(constructor: Function, ...arges: any[]): T {
  //1.创建一个空对象，继承constructor的原型
  const obj = Object.create(constructor.prototype)
  //2.将obj作为 this，执行constructor， 传入参数
  constructor.apply(obj, arges)
  //3.返回obj
  return obj

}

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

const f = customNwe(FOO, 'luo')
console.info(f)
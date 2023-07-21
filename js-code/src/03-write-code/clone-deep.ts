/**
 * @description 深拷贝
 */

export function cloneDeep(obj: any, map = new WeakMap()): any {
  if (typeof obj != 'object' || obj == null) return obj

  //防止循环引用
  let objFormMap = map.get(obj)
  if (objFormMap) return objFormMap

  let target: any = {}
  map.set(obj, target)

  //Map
  if (obj instanceof Map) {
    target = new Map()
    obj.forEach((v, k) => {
      let v1 = cloneDeep(v, map)
      let k2 = cloneDeep(k, map)
      target.set(k2, v1)
    })
  }

  //Set
  if (obj instanceof Set) {
    target = new Set()
    obj.forEach(v => {
      let v1 = cloneDeep(v, map)
      target.add(v1)
    })
  }

    //Array
    if (obj instanceof Array) {
      target = obj.map(item => cloneDeep(item, map))
    }  

  //Object
  for (let k in obj) {
    let value = obj[k]
    let value1 = cloneDeep(value, map)
    target[k] = value1
  }

  return target
}

//功能测试
// const a: any = {
//   set: new Set([10, 20, 30]),
//   map: new Map([['x', 10], ['y', 20]]),
//   info: {
//     city: '北京'
//   },
//   fn: () => { console.info('100')}

// }

// a.self = a
// console.info(a)
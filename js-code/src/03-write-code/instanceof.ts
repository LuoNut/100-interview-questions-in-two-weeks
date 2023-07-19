/**
 * @description 自定义 instanceof
 */

export function myInstanceof(instance: any, origin: any): boolean {
  if (instance == null) return false

  let type = typeof instance
  if (type !== 'object' && type !== 'function') {
    return false
    
  }

  let tempInstance = instance
  while(tempInstance) {
    
    if (tempInstance.__proto__ === origin.prototype) {
      return true
    }
    tempInstance = tempInstance.__proto__
  }

  return false
}

//功能测试
// console.info(myInstanceof({}, Object))
// console.info(myInstanceof([], Object))
// console.info(myInstanceof([], Array))
// console.info(myInstanceof({}, Array))
// console.info(myInstanceof('123', String))
/**
 * @description 获取数值类型
 */

export function getType(x: any): string {
  let originType = Object.prototype.toString.call(x)
  let spaceIndex = originType.indexOf(' ')
  let type = originType.slice(spaceIndex + 1, -1)
  return type.toLowerCase()
}

console.info( getType(null))
console.info( getType(undefined))
console.info( getType(100))
console.info( getType('abc'))
console.info( getType(true))
console.info( getType(Symbol()))
console.info( getType({}))
console.info( getType([]))
console.info( getType(() => {}))
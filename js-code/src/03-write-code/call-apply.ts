/**
 * @description 实现code apply
 * 
 */


//@ts-ignore
Function.prototype.customCall = function(content: any, ...args: any[]) {
  if (content == null) content = globalThis  //参数为空
  if (typeof content !== 'object') content = new Object(content) //content 为值， 变成对象类型

  let fnKey = Symbol()
  content[fnKey] = this //this为当前函数
  let res  = content[fnKey](...args) //改变this

  delete content[fnKey]

  return res
}

//@ts-ignore
Function.prototype.customApply = function(content: any, args: any[] = []) {
  if (content == null) content = globalThis  //参数为空
  if (typeof content !== 'object') content = new Object(content) //content 为值， 变成对象类型

  let fnKey = Symbol()
  content[fnKey] = this //this为当前函数
  let res  = content[fnKey](...args) //改变this

  delete content[fnKey]

  return res
}

// function fn1(this: any, a: number, b: number, c:number) {
//   console.info(this, a, b, c)
// }

// //@ts-ignore
// console.info(fn1.customApply({x: 100}, 10, 20, 30));

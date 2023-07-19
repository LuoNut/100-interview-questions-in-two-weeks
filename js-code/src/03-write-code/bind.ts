/**
 * @description bind 的实现
 */

//@ts-ignore
Function.prototype.customBind = function(content: any, ...bindArgs: any[]) {

  let self = this 

  return function(...args: any[]) {
    args = bindArgs.concat(args)
    return self.apply(content, args)
  }
}

function add(this: any, a: number, b: number, c:number) {
  console.log(this, a, b, c);
}

//@ts-ignore
const fn = add.customBind({a: 1000}, 20)
fn(30, 40)

/**
 * @description curry
 */

export function curry(fn: Function) {
  let length = fn.length 
  let args: any[] = []

  function calc(this: any, ...curArg: any[]) {
    args = [
      ...args,
      ...curArg
    ]

    if (args.length < length) {
      return calc
    } else {
      return fn.apply(this, args.slice(0, length))
    }

    
  }
  return calc
}

function add(a: number, b: number, c: number): number {
  return a + b + c
}

// console.log(add(10, 20, 30));
// let curryAdd = curry(add)
// let res = curryAdd(10)(20)(30)
// console.info(res)

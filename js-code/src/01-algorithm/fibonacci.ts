
/**
 * 斐波那契数列
 * @param n n
 * @returns number
 */
// function fibonacci(n: number): number {
//   if(n <= 0) return 0
//   if(n === 1) return 1

//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

export function fibonacci(n: number): number {
  if(n <= 0) return  0
  if(n === 1) return 1

  let n1 = 1 //记录（n - 1）的值
  let n2 = 0 //记录（n - 2）的值
  let res = 0

  for(let i = 2; i <= n; i++) {
    res = n1 + n2

    //记录中间值
    n2 = n1
    n1 = res
  }

  return res
}
console.log(fibonacci(9));

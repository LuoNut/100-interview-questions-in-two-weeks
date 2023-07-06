/**
 * 两数之和(循环)
 * @param arr array
 * @param num num
 */
export function findTwoNumber1(arr: number[], num: number): number[] {
  const res: number[] = []

  let length = arr.length
  if(length == 0) return res

  for(let i = 0; i < length - 1; i++) {
    let n1 = arr[i]
    let flag = false

    for(let j = i + 1; j < length; j++) {
      let n2 = arr[j]
      
      if(n1 + n2 == num) {
        res.push(n1)
        res.push(n2)
        flag = true
        break
      }
    }
    if(flag) break
  }
  return res
}

export function findTwoNumber2(arr: number[], n: number): number[] {
  const res: number[] = []

  let length = arr.length
  if(length === 0) return res

  let i = 0
  let j = length - 1

  while(i < j) {
    let n1 = arr[i]
    let n2 = arr[j]
    let sum = n1 + n2

    if(sum > n) {
      //sum大于n，则 j 需要向左移
      j --
    } else if (sum < n) {
      //sun 小于 n，则 i 需要向右移
      i ++
    } else {
      res.push(n1)
      res.push(n2)
      break
    }
  }

  return res

}

let num = [1, 2, 1, 2,1, 2,1, 2,1, 2,1, 2,1, 2,1, 2,1, 2,4, 7, 11, 15]


//性能测试
console.time('findTwoNumber1')
for(let i = 0; i < 100 *10000; i++) { //291ms
  findTwoNumber1(num, 15)
}
console.timeEnd('findTwoNumber1')

console.time('findTwoNumber2')
for(let i = 0; i < 100 *10000; i++) { //54ms
  findTwoNumber2(num, 15)
}
console.timeEnd('findTwoNumber2')

/**
 * 移动数组中的 0 到末尾
 * @param arr arrry 
 * @returns 
 */
export function moveZero1(arr: number[]): void {
  let length = arr.length
  if(length === 0) return 

  let zeroLength = 0

  for(let i = 0; i <= length - zeroLength; i++) {
    if(arr[i] === 0) {
      arr.push(0)
      arr.splice(i, 1)
      i --
      zeroLength ++
    }
  }
}

export function moveZero2(arr: number[]): void {
  let length = arr.length
  if(length === 0) return 

  let j = -1

  for(let i = 0; i < length; i++) {
    
    if(arr[i] === 0) {
      //第一个 0
      if(j < 0) j = i
    }

    if(arr[i] != 0 && j >= 0) {

      //交换
      const n = arr[i]
      arr[i] = arr[j]
      arr[j] = n

      //j 移向下一个
      j++
    }
  }
}

// let arr = [1, 0, 4, 5, 0, 6,  0, 4]
// moveZero2(arr)
// console.log(arr);

//性能测试
let arr1 = []
for(let i = 0; i < 10 * 10000; i++) {
  if(i % 10 == 0) {
    arr1.push(0)
  } else {
    arr1.push(i)
  }
}

console.time('moveZero1')
moveZero1(arr1)
console.timeEnd('moveZero1') //49ms

let arr2 = []
for(let i = 0; i < 10 * 10000; i++) {
  if(i % 10 == 0) {
    arr2.push(0)
  } else {
    arr2.push(i)
  }
}

console.time('moveZero2')
moveZero2(arr2)
console.timeEnd('moveZero2') //2ms
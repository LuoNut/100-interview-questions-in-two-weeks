/**
 * 二分查找(循环)
 * @param arr array
 * @param target target
 */
export function binarySearch1(arr: number[], target: number): number {
  let length = arr.length
  if(length === 0) return -1

  let startIndex = 0 //开始位置
  let endIndex = length -1 //结束位置

  while (startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2) 
    let midValue = arr[midIndex]

    if(target < midValue) {
      //目标值较小，继续在左侧寻找
      endIndex = midIndex - 1
    }else if (target > midValue) {
      //目标值较大，继续在右侧寻找
      startIndex = midIndex + 1
    }else {
      return midIndex
    }
  }

  return -1
}

/**
 * 二分查找（递归）
 * @param arr array
 * @param num number
 * @param startIndex start index
 * @param endIndex end index
 */
export function binarySearch2(arr: number[], target: number, startIndex?: number, endIndex?: number): number {
  let length = arr.length
  if(length === 0) return -1

  //开始和结束范围
  if(startIndex == null) startIndex = 0
  if(endIndex == null) endIndex = length -1

  //如果start大于end，则结束
  if(startIndex > endIndex) return -1

  //取中间值
  let midIndex = Math.floor((startIndex + endIndex) / 2)
  let midValue = arr[midIndex]

  if(target < midValue) {
    //目标值太小，需要继续向左寻找
    return binarySearch2(arr, target, startIndex, midIndex -1)
  }else if (target > midValue) {
    //目标值太大，需要继续向右寻找
    return binarySearch2(arr, target, midIndex + 1, endIndex)
  }else {
    //相等，返回
    return midIndex
  }
  
}

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140]
let num = 40
console.info(binarySearch2(arr, num))

//性能测试
console.time('binarySearch1')
for(let i = 0; i < 100 * 10000; i++) {
  binarySearch1(arr, num)
}
console.timeEnd('binarySearch1')

console.time('binarySearch2')
for(let i = 0; i < 100 * 10000; i++) {
  binarySearch2(arr, num)
}
console.timeEnd('binarySearch2')
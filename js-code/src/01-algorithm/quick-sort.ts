
/**
 * 快速排序 (splice)
 * @param arr array
 * @returns array
 */
export function quickSort1(arr: number[]): number[] {
  let length = arr.length
  if(length === 0) return arr

  let midIndex = Math.floor(length / 2)
  let midValue = arr.splice(midIndex, 1)[0]

  let left: number[] = []
  let right: number[] = []

  //以为前面使用了 splice 截取中间值,所以循环的次数减一
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < midValue) {
      //小于中间,放左边
      left.push(arr[i])
    } else {
      //大于中间值,放右边
      right.push(arr[i])
    }
  }
   return quickSort1(left).concat(midValue, quickSort1(right))
}

/**
 * 快速排序 (slice)
 * @param arr array
 * @returns array
 */
export function quickSort2(arr: number[]): number[] {
  let length = arr.length
  if(length === 0) return arr

  let midIndex = Math.floor(length / 2)
  let midValue = arr.slice(midIndex, midIndex + 1)[0]

  let left: number[] = []
  let right: number[] = []

  //以为前面使用了 splice 截取中间值,所以循环的次数减一
  for(let i = 0; i < length; i++) {
    if (i !== midIndex) {
      if (arr[i] < midValue) {
        //小于中间,放左边
        left.push(arr[i])
      } else {
        //大于中间值,放右边
        right.push(arr[i])
      }
    }
    
  }
   return quickSort2(left).concat(midValue, quickSort2(right))
}



let arr = [3, 2, 3, 4, 5, 6, 7, 2, 1]
console.log(quickSort2(arr));

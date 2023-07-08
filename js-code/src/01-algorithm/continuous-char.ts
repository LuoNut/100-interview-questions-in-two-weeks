
interface IRes {
  char: string
  length: number
}

/**
 * 查找出现最多的连续字符（嵌套循环）
 * @param str string
 * @returns 
 */
export function continuousChar(str: string): IRes {
  let res: IRes = {
    char: '',
    length: 0
  }

  let length = str.length
  if (length === 0) return res

  let tempLength = 0

  for (let i = 0; i < length; i++) {
    tempLength = 0

    for (let j = i; j < length; j++) {
      //判断字符是否连续
      if (str[i] === str[j]) {
        tempLength ++
      }
      
      //判断连续是否结束
      if(str[i] !== str[j] || j === length -1) {
        if(tempLength > res.length) {
          res.char = str[i]
          res.length = tempLength
        }

        //跳步
        if(i < length - 1) i = j - 1

        break
        
      }

      
    }
  }

  return res
}

export function continuousChar2(str: string): IRes {
  let res:IRes = {
    char: '',
    length: 0
  }

  let length = str.length
  if (length === 0) return res

  let i = 0
  let j = 0
  let tempLength = 0

  for (;i < length; i++) {
    if (str[i] === str[j]) {
      tempLength ++
    }

    if (str[i] !== str[j] || i === length -1) {
      if(tempLength > res.length) {
        res.char = str[j]
        res.length = tempLength
      }
      tempLength = 0  //rebase

      if(i < length - 1) {
        j = i //让 j 追上 i
        i--
      }
    }
  }

  return res
} 

// let str = 'aabbcccccdddeeee1122333'
// console.info(continuousChar2(str))

//性能测试
let str = ''
for (let i = 0; i < 100 * 1000; i++) {
  str += i.toString()
}

console.time('continuousChar1')
continuousChar(str)
console.timeEnd('continuousChar1') //10ms



console.time('continuousChar2')
continuousChar2(str)
console.timeEnd('continuousChar2') //14ms
/**
 * @description 切换字母大小写
 * @author luo
 */

/**
 * 切换字母大小写
 * @param str string
 */
export function switchLetterCase1(str: string): string {
  let length = str.length
  if(length === 0) return str

  let res = ''
  let reg1 = /[a-z]/
  let reg2 = /[A-Z]/
 
  for (let i = 0; i < length; i++) {
    let s = str[i]

    if (reg1.test(s)) {
      res += s.toUpperCase()
    } else if(reg2.test(s)) {
      res += s.toLowerCase()
    } else {
      res += s
    }
  }

  return res
}

/**
 * 切换字母大小写（ASCII 编码）
 * @param str string
 * @returns 
 */
export function switchLetterCase2(str: string): string {
  let length = str.length
  if (length === 0) return str

  let res = ''

  for (let i = 0; i < length; i++) {
    let s = str[i]
    let code = s.charCodeAt(0)

    if (code >= 65 && code <= 90) {
      res += s.toLowerCase()
    } else if (code >= 97 && code <= 122) {
      res += s.toUpperCase()
    } else {
      res += s
    }
  }

  return res
}

// console.info(switchLetterCase1('aSd34JkJ$faS34'))
// console.info(switchLetterCase2('aSd34JkJ$faS34'))

//性能测试
let str = 'aSd34JkJ$faS34aSd34JkJ$faS34aSd34JkJ$faS34aSd34JkJ$faS34aSd34JkJ$faS34aSd34JkJ$faS34aSd34JkJ$faS34aSd34JkJ$faS34aSd34JkJ$faS34'

console.time('switchLetterCase1') 
for (let i = 0; i < 10 * 10000; i++) {
  switchLetterCase1(str)
}
console.timeEnd('switchLetterCase1')  //692ms

console.time('switchLetterCase2') 
for (let i = 0; i < 10 * 10000; i++) {
  switchLetterCase2(str)
}
console.timeEnd('switchLetterCase2') //305ms
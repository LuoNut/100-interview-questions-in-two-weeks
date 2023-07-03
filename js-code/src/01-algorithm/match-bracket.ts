
function isMatch(left: string, right: string): boolean {
  if(left === '(' && right === ')') return true
  if(left === '[' && right === ']') return true
  if(left === '{' && right === '}') return true
  return false
}

/**
 * 判断括号是否匹配
 * @param str str
 * @returns boolean
 */
export function matchBarcket(str: string): boolean {
  let length = str.length
  if (length === 0) return true

  let stack = []

  let leftSymbols = '([{'
  let rightSymbols = ')]}'

  for(let i = 0; i < length; i++ ) {
    let s = str[i]

    if (leftSymbols.includes(s)) {
 
      
      stack.push(s)
    } else if (rightSymbols.includes(s)) {
      if(isMatch(stack[stack.length -1], s)) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  
  return stack.length === 0
}

const str = matchBarcket('{}[[]][{{}}]')
console.info(str)
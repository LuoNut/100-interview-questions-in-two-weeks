/**
 * @description 两个栈 - 一个队列
 * @author luo
 */

export class MyQueue {
  private stack1: number [] = []
  private stack2: number [] = []

  /**
   * 入队
   * @param n n
   */
  add(n: number) {
    this.stack1.push(n)
  }

  /**
   * 删除
   * @returns 
   */
  delet(): number | null {
    
    let stack1 = this.stack1
    let stack2 = this.stack2

    //将stack1 所有元素 转移到 stack2
    while(stack1.length) {
      const n = stack1.pop()
      if (n != null) {
        stack2.push(n)
      }
    }

    //stack2 pop()
    let res = stack2.pop()

    //将stack2 所有元素还给 stack1
    while(stack2.length) {
        const n = stack2.pop()
        if(n != null) {
          stack1.push(n)
        }
    }
    return res || null
  }

  get length(): number {
    return this.stack1.length
  }
}

const q = new MyQueue() 
q.add(100)
q.add(200)
q.add(300)

console.log(q.length);
console.log(q.delet());
console.log(q.length);
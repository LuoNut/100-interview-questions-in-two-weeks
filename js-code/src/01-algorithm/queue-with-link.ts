/**
 * @description 单项链表组成队列
 * 
 */

interface ILinkListNode {
  value: number,
  next: ILinkListNode | null
}

export class MyQueue {
  private head: ILinkListNode | null = null
  private tail: ILinkListNode | null = null
  private len = 0

  /**
   * 入队
   * @param n number
   */
  add(n: number) {
    let newNode = {
      value: n,
      next: null
    }

    //处理head
    if(this.head === null) {
      this.head = newNode
    }

    //处理tail
    let tailNode = this.tail
    if(tailNode) {
      tailNode.next = newNode
    }
    this.tail = newNode

    //处理队列长度
    this.len ++
  }
  
  /**
   * 出队
   */
  delete(): number | null {
    let headNode = this.head
    if(headNode === null) return null
    if(this.len <= 0) return null

    //取值
    let value = headNode.value

    //处理head
    this.head = headNode.next

    //记录长度
    this.len --

    return value
  } 

  /**
   * 队列长度
   */
  get length(): number {
    return this.len
  }

}

// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info('length1',q.length)
// console.info(q.delete())
// console.info('length2',q.length)
// console.info(q.delete())
// console.info('length3',q.length)
// console.info(q.delete())
// console.info('length4',q.length)
// console.info(q.delete())
// console.info('length5',q.length)

// //性能测试
// const q1 = new MyQueue()
// console.time('queue with list')
// for(let i = 0; i < 10 * 10000; i++) {
//   q1.add(i)
// }
// for(let i = 0; i < 10 * 10000; i++) {
//   q1.delete()
// }
// console.timeEnd('queue with list')

// const q2 = []
// console.time('queue with array')
// for(let i = 0; i < 10 * 10000; i++) {
//   q2.push(i)
// }
// for(let i = 0; i < 10 * 10000; i++) {
//   q2.shift()
// }
// console.timeEnd('queue with array')

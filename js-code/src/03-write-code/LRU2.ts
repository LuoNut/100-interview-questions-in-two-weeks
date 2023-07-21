/**
 * @description LRU 链表 + 对象
 */

interface IListNode {
  value: any
  key: string
  prev?: IListNode
  next?: IListNode
}

export class LRU2 {
  private length: number
  private data: { [key: string]: IListNode} = {}
  private dataLength: number = 0
  private listHead: IListNode | null = null
  private listTail: IListNode | null = null

  constructor(length: number) {
    if (length < 1) throw new Error('invalid length')
    this.length = length
  }

  private moveToTail(curNode: IListNode) {
    let tail = this.listTail
    if (tail === curNode) return 

    //1.让prevNode nextNode 断绝与 curNode 的关系
    let prevNode = curNode.prev
    let nextNode = curNode.next

    if (prevNode) {
      if (nextNode) {
        prevNode.next = nextNode
      } else {
        delete prevNode.next
      }
    }
    if (nextNode) {
      if (prevNode) {
        nextNode.prev = prevNode
      } else {
        delete nextNode.prev
      }

      if (curNode === this.listHead) this.listHead = nextNode
      
    }

    //让curNode 断绝与 prevNode nextNode 的关系
    delete curNode.prev
    delete curNode.next

    //在 list 末尾重新建立起 curNode 的新关系
    if (tail) {
      tail.next = curNode
      curNode.prev = tail
    }
    
    this.listTail = curNode
  }

  private tryClean() {
    while(this.dataLength > this.length) {
      let head = this.listHead

      if (head == null) throw new Error('head is null') 
      let headNext = head.next
      if (headNext == null) throw new Error('headNext is null')

      //1.断绝head 与 headNext 的关系
      delete head.next
      delete headNext.prev

      //2.重复赋值
      this.listHead = headNext

      //3.清理数据，重新计数
      delete this.data[head.key]
      this.dataLength = this.dataLength - 1

    }

  }

  get(key: string) {
    let data = this.data
    let curNode = data[key]
    if (!curNode) return null

    //如果查找数据处于末尾
    if (this.listTail == curNode) {
      return curNode.value
    }
    
    //不处于末尾，先移动到末尾
    this.moveToTail(curNode)
    return curNode.value
  }

  set(key: string, value: any) {
    let data = this.data
    let curNode = data[key]

    if (!curNode) {
      //新增 数据
      let newNode: IListNode = {key, value}
      //储存数据
      data[key] = newNode
      
      //移动到末尾
      this.moveToTail(newNode)
      //记录长度
      this.dataLength ++
      //判断是否第一个
      if (this.dataLength === 1) {
        this.listHead = newNode 
      }
    } else {
      //修改数据
      curNode.value = value
      //移动到末尾
      this.moveToTail(curNode)
    }
    //尝试清理长度
    this.tryClean()
  }
}

//功能测试
// const lruCache = new LRU2(2)
// lruCache.set('1', 1)
// lruCache.set('2', 2)
// console.info(lruCache.get('1'))
// lruCache.set('3', 3)
// console.info(lruCache.get('2'))
// lruCache.set('4', 4)
// console.info(lruCache.get('1'))
// console.info(lruCache.get('3'))
// console.info(lruCache.get('4'))
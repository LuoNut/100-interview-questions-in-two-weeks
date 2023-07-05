/**
 * @description
 * @author luo
 */

export interface ILinkListNode {
  value: number,
  next?: ILinkListNode
}

/**
 * 反转单链表
 * @param listNode 
 */
export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
  //定义三个指针
  let prevNode: ILinkListNode | undefined = undefined
  let curNode: ILinkListNode | undefined = undefined
  let nextNode: ILinkListNode | undefined = listNode

  //以nextNode为主，遍历链表
  while(nextNode) {
    //第一个元素，删除next，防止循环引用
    if(curNode && !prevNode) {
      //@ts-ignore
      delete curNode.next
    }

    //反转指针
    if(curNode && prevNode) {
      //@ts-ignore
      curNode.next = prevNode
    }

    //整体向后移动指针
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode.next
  }

  //当next为空时，此时curNode尚未设置next
  curNode!.next = prevNode
  return curNode! 

}

export function createLinkList(arr: number[]): ILinkListNode {
  let length = arr.length
  if(length === 0) throw new Error('arr is empty')

  let curNode: ILinkListNode = {
    value: arr[length - 1]
  }

  if(length === 1) return curNode

  for(let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }

  return curNode
}

// let res = createLinkList([1, 2, 3, 4, 5])
// console.log(res);
// let res1 = reverseLinkList(res)
// console.log(res1);

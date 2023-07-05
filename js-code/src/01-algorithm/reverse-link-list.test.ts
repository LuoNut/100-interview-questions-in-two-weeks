/**
 * @description 反转链表 test
 * @author luo
 */
import { ILinkListNode, reverseLinkList, createLinkList } from "./reverse-link-list";

describe('反转单项链表', () => {
  it('单个元素', () => {
    const node: ILinkListNode = {value: 100}
    let res = reverseLinkList(node)
    expect(res).toEqual({
      value: 100
    })
  })

  it('多个元素', () => {
    const linkLIst = createLinkList([100, 200, 300, 400])
    let res = reverseLinkList(linkLIst)
    expect(res).toEqual({
      value: 400,
      next: {
        value: 300,
        next: {
          value: 200,
          next: {
            value: 100
          }
        }
      }
    })
  })
})
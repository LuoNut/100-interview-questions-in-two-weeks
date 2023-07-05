/**
 * @description 链表实现队列
 */

import { MyQueue } from "./queue-with-link";

describe('链表实现队列', () => {
  it('add and length', () => {
    let q = new MyQueue()
    expect(q.length).toBe(0)

    q.add(100)
    expect(q.length).toBe(1)
  })

  it('delete', () => {
    let q = new MyQueue()
    expect(q.delete()).toBeNull()

    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.delete()).toBe(100)
    expect(q.delete()).toBe(200)
    expect(q.delete()).toBe(300)
    expect(q.delete()).toBeNull()
  })
})
/**
 * @description 两个栈 - 一个队列
 * @author luo
 */

import { MyQueue } from "./two-stacks-one-queue";
describe('两个栈 一个队列', () => {
  it('add and length', () => {
    let q = new MyQueue()
    expect(q.length).toBe(0)

    q.add(1)
    q.add(2)
    q.add(3)

    expect(q.length).toBe(3)
  })

  it('delete', () => {
    let q = new MyQueue()
    expect(q.delet()).toBe(null)

    q.add(100)
    q.add(200)
    q.add(300)

    expect(q.delet()).toBe(100)
    expect(q.length).toBe(2)
    expect(q.delet()).toBe(200)
    expect(q.length).toBe(1)
  })
})
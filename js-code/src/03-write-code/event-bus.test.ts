/**
 * @description EventBus 自定义事件
 */

import { EventBus1, EventBus2 } from "./event-bus";

describe('EvnetBus 自定义事件', () => {
  it('绑定事件 触发事件', () => {
    let event = new EventBus2()

    let fn1 = jest.fn()
    let fn2 = jest.fn()
    let fn3 = jest.fn()

    event.on('key1', fn1)
    event.on('key1', fn2)
    event.on('XXX', fn3)

    event.emit('key1',10 , 20)

    expect(fn1).toBeCalledWith(10, 20)
    expect(fn2).toBeCalledWith(10, 20)
    expect(fn3).not.toBeCalled()
  })

  it('解绑单个事件', () => {
    let event = new EventBus2()

    let fn1 = jest.fn()
    let fn2 = jest.fn()

    event.on('key1', fn1)
    event.on('key1', fn2)

    event.off('key1', fn1)

    event.emit('key1', 10, 20)

    expect(fn1).not.toBeCalled()
    expect(fn2).toBeCalledWith(10, 20)
  })

  it('解绑所有事件', () => {
    let event = new EventBus2()

    let fn1 = jest.fn()
    let fn2 = jest.fn()

    event.on('key1', fn1)
    event.on('key1', fn2)

    event.off('key1')

    event.emit('key1', 10, 20)

    expect(fn1).not.toBeCalled()
    expect(fn2).not.toBeCalled()
  })

  it('once', () => {
    let event = new EventBus2()
    let n = 1

    let fn1 = jest.fn(() => n++)
    let fn2 = jest.fn(() => n++)

    event.once('key', fn1)
    event.once('key', fn2)

    event.emit('key') 
    event.emit('key') 
    event.emit('key') 
    event.emit('key') 
    event.emit('key') 

    expect(n).toBe(3)
  })
})

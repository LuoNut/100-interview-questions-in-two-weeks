/**
 * @description event bus
 */

export class EventBus1 {
  private events: {
    [key: string]: Array<{fn: Function; isOnce: boolean}>
  }

  constructor() {
    this.events = {}
  }

  on(key: string, fn: Function, isOnce:boolean = false) {
    let events = this.events
    if(events[key] == null) events[key] = [] //初始化

    events[key].push({fn, isOnce})
  }

  once(key: string, fn: Function) {
    this.on(key, fn, true)
  }

  off(key: string, fn?: Function) {
    if(!fn) {
      this.events[key] = []
    } else {
      let fnList = this.events[key]
      if(fnList) {
        this.events[key] = fnList.filter(item => item.fn !== fn)
      }
      
    }
  }

  emit(key: string, ...args: any[]) {
    let fnList = this.events[key]

    if(fnList) {
      this.events[key] = fnList.filter(item => {
        let {fn, isOnce} = item
        fn(...args)
  
        if(isOnce) return false
        return true
      })
    }
  }
}

export class EventBus2 {
  private events: { [key: string]: Array<Function> }
  private onceEvents: { [key: string]: Array<Function>}

  constructor() {
    this.events = {}
    this.onceEvents = {}
  }

  on(key: string, fn: Function) {
    if(this.events[key] == null) this.events[key] = []

    this.events[key].push(fn)
  }

  once(key: string, fn: Function) {
    if(this.onceEvents[key] == null) this.onceEvents[key] = []

    this.onceEvents[key].push(fn)
  }

  off(key: string, fn?: Function) {
    if (!fn) {
      this.events[key] = []
      this.onceEvents[key] = []
    } else {
      let fnList = this.events[key]
      let onceFnList = this.onceEvents[key]

      if (fnList) {this.events[key] = fnList.filter(item => item != fn)}
      if (onceFnList) {this.onceEvents[key] = onceFnList.filter(item => item != fn)}
    }
  }

  emit(key: string, ...args: any[]) {
    let fnList = this.events[key]
    let onceFnList = this.onceEvents[key]

    if(fnList) {
      fnList.forEach(item => item(...args))
    }
    

    if(onceFnList) {
      onceFnList.forEach(item => item(...args))

      this.onceEvents[key] = []
      
    }
  }
}


//功能测试
// function fn1(a: any, b: any) { console.info('fn1', a, b) }
// function fn2(a: any, b: any) { console.info('fn2', a, b) }
// function fn3(a: any, b: any) { console.info('fn3', a, b) }

// const e = new EventBus2()
// e.on('key1',fn1)
// e.on('key1',fn2)
// e.once('key1',fn3)

// e.emit('key1', 10, 20)

// e.emit('key1', 10, 20)

// e.off('key1', fn1)

// e.emit('key1', 20, 30)

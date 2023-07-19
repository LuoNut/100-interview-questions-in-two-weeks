/**
 * @description lazy man
 */
 
class lazyMan{
  private name: string
  private tasks: Function[] = []

  constructor(name: string) {
    this.name = name

    setTimeout(() => {
      this.next()
    }, 0);
  }

  //执行下一个任务的功能函数
  private next() {
    let task = this.tasks.shift()
    if(task) task()
  }

  eat(food: string) {
    let task = () => {
      console.info(`${this.name} eat ${food}`)
      this.next()
    }

    this.tasks.push(task)
    return this
  }

  sleep(second: number) {
    let tack = () => {
      setTimeout(() => {
        this.next()
      }, second * 1000);
    }

    this.tasks.push(tack)
    return this
  }

}

//功能测试
const me = new lazyMan('大明')
me.eat('苹果').eat('香蕉').sleep(3).eat('饭')
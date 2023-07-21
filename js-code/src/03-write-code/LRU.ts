/**
 * @description LRU
 */

export class LRUCache {
  private length: number
  private data: Map<any, any> = new Map()

  constructor(length: number) {
    if (length < 1) throw new Error('invalid length')
    this.length = length
  }

  set(key: any, value: any) {
    let data = this.data
    if (data.has(key)) {
      data.delete(key)
    }

    data.set(key, value)

    if (data.size > this.length) {
      let delKey = data.keys().next().value
      data.delete(delKey)
    }
  }

  get(key: any) {
    let data = this.data

    if (!data.has(key)) return null

    let value = data.get(key)

    data.delete(key)
    data.set(key, value)

    return value
  }
}

//功能测试
// const lruCache = new LRUCache(2)
// lruCache.set(1, 1)
// lruCache.set(2, 2)
// console.info(lruCache.get(1))
// lruCache.set(3, 3)
// console.info(lruCache.get(2))
// lruCache.set(4, 4)
// console.info(lruCache.get(1))
// console.info(lruCache.get(3))
// console.info(lruCache.get(4))
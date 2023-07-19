/**
 * @description curry test
 */
import { curry } from "./curry";

describe('curry', () => {
  it('curry', () => {
    function add(a: number, b: number, c: number): number {
      return a + b + c
    }
    let res = add(10, 20, 30)

    let curryAdd =  curry(add)

    expect(curryAdd(10)(20)(30)).toBe(res)

    
  })
})
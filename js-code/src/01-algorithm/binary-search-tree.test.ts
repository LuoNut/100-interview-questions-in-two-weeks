/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2023-07-06 18:04:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-07-06 18:08:03
 */

import { ITreeNode, getKthValue } from "./binary-search-tree";

/**
 * @description 二叉搜索树 test
 */
describe('二叉搜索树', () => {
  const bst: ITreeNode = {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: {
        value: 4,
        left: null,
        right: null
      }
    },
    right: {
      value: 7,
      left: {
        value: 6,
        left: null,
        right: null
      },
      right: {
        value: 8,
        left: null,
        right: null
      }
    }
  }

  it('正常情况', () => {
    expect(getKthValue(bst, 3)).toBe(5)
  })

  it('太小', () => {
    expect(getKthValue(bst, -1)).toBeNull()
  })

  it('太大', () => {
    expect(getKthValue(bst, 100)).toBeNull()
  })
})
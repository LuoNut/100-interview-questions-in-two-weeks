
export interface ITreeNode  {
  value: number
  left: ITreeNode | null
  right: ITreeNode | null
}

let arr: number[] = []

/**
 * 二叉树 前序遍历
 * @param node tree node
 */
function preOrderTraverse(node: ITreeNode | null) {
  if(node === null) return

  arr.push(node.value)
  preOrderTraverse(node.left)
  preOrderTraverse(node.right)
  
}

/**
 * 二叉树中序遍历
 * @param node tree node
 * @returns 
 */
function inOrderTraverse(node: ITreeNode | null) {
  if(node === null) return 

  inOrderTraverse(node.left)
  arr.push(node.value)
  inOrderTraverse(node.right)
  
}

function postOrderTraverse(node: ITreeNode | null) {
  if(node === null) return 

  postOrderTraverse(node.left)
  postOrderTraverse(node.right)
  arr.push(node.value)
  
}

/**
 * 寻找 BST 里的第几个数的值
 * @param node tree node
 * @param k 第几个数
 */
export function getKthValue(node: ITreeNode, k: number): number | null {
  inOrderTraverse(node)
  // console.log(arr);
  
  return arr[k] ||null
   

}

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

// preOrderTraverse(tree)
// inOrderTraverse(tree)
// postOrderTraverse(tree)
console.log(getKthValue(bst, 2));

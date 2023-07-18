/**
 * @description 遍历 dom tree
 * 
 */

/**
 * 访问节点
 * @param n node
 */

function visitNode(n: Node) {
  if (n instanceof Comment) {
    console.info('Comment node --', n.textContent)
  }

  if (n instanceof Text) {
    const t = n.textContent?.trim()
    if (t) {
      console.info('Text node --', t)
    }
    
  }

  if (n instanceof HTMLElement) {
    console.info('ELement node --', `<${n.tagName.toLocaleLowerCase()}>`)
  }
}

/**
 * 深度遍历
 * @param root root dom node
 */
function depthFirstTraverse(root: Node) {
  visitNode(root)

  const childNodes = root.childNodes

  
  if (childNodes.length) {
    childNodes.forEach( child => {
      depthFirstTraverse(child)
    })
  }
}


/**
 * 广度遍历
 * @param root root dom node
 */
function breadthFirstTraverse(root: Node) {
  let queue: Node[] = []

  //放入根节点
  queue.unshift(root)

  while(queue.length > 0) {
    //弹出节点
    let curNode = queue.pop()
    // console.log(curNode);
    
    if (curNode == null) break
    
    //显示节点信息
    visitNode(curNode)

    //放入子节点
    let childNodes = curNode.childNodes
    if (childNodes.length) {
      childNodes.forEach(child => queue.unshift(child))
    }
  }
}

const box = document.getElementById('box')
if (box == null) throw new Error('box is null')

console.info(breadthFirstTraverse(box))

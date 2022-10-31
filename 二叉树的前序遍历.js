/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  const res = []
  const preloader = (root) => {
    // 验证root是否存在
    if (root === null) return;
    // 修改以下顺序可 成为 中序遍历、后序遍历等等......
    res.push(root.val)
    preloader(root.left)
    preloader(root.right)
  }
  preloader(root)
  return res;
};

/**
 * --------------------------------
 */
 var preorderTraversal = function(root) {
  let stk = []
  let res = []
  while (stk.length!==0 || root) {
    while(root){
      res.push(root.val)
      // 右子树入栈
      stk.push(root.right)
      // 左子树修订
      root = root.left;
    }
    root = stk.pop()
  }
  return res;
};
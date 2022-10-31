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
 * @return {number[][]}
 */
var levelOrder = function(root) {   
  const res = []
  if (!root){
    return res;
  }
  const q = [];
  q.push(root);
  while (q.length!==0) {
    res.push([]);
    let len = q.length; /** 此项必须分离出来,否则循环内部q.push会影响数组长度 */
    for(var i=0;i<len;i++){
      const node = q.shift();
      res[res.length-1].push(node.val);
      if(node.left){
        q.push(node.left);
      }
      if(node.right){
        q.push(node.right);
      }
    }
  }
  return res;
};
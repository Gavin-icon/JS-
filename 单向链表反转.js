/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  // head: { next: { next: {} } }
  // head不存在或者链表中只有一个
  if (head === null || head.next === null){
    return head;
  }
  let current = head;
  let prev = null;
  let temp = null;
  while (current) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp
  }
  return prev;
};
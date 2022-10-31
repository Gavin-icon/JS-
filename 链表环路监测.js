/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  // 如果head不存在 或者 head.next不存在，则无环，返回null
    if(head === null || head.next=== null) {
      return null;
    }
    let fast = head;
    let slow = head;
    while (fast !== null) {
      slow = slow.next
      if (fast.next === null){
        return null;
      }
      fast = fast.next.next
      
      // 监测是否有环, 快慢指针相遇则有环
      if (fast === slow){
        // 寻找环 起始位置
        let ahead = head
        while (ahead !== slow) {
          ahead = ahead.next;
          slow = slow.next
        }
        // 返回起始位置 return ahead / slow
        return ahead;
      }
    }
    return null;
};
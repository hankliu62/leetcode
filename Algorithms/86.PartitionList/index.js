/**
 * 分隔链表 https://leetcode-cn.com/problems/partition-list/ [中等]
 *
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 你应当保留两个分区中每个节点的初始相对位置。
 *
 * 示例:
 *  输入: head = 1->4->3->2->5->2, x = 3
 *  输出: 1->2->2->4->3->5
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  var small;
  var big;

  if (!head) {
    return head;
  }

  var node = new ListNode(head.val);
  var smallFirst;
  var bigFirst;
  if (head.val < x) {
    small = node;
    smallFirst = small;
  } else {
    big = node;
    bigFirst = big;
  }

  head = head.next;
  while(head) {
    node = new ListNode(head.val);
    if (node.val < x) {
      if (small) {
        small.next = node;
        small = small.next;
      } else {
        small = node;
        smallFirst = small;
      }
    } else {
      if (big) {
        big.next = node;
        big = big.next;
      } else {
        big = node;
        bigFirst = big;
      }
    }

    head = head.next;
  }

  if (small && bigFirst) {
    small.next = bigFirst;
  }

  return smallFirst || bigFirst;
};
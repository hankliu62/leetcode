/**
 * 反转链表 II https://leetcode-cn.com/problems/reverse-linked-list-ii/ [困难]
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 *
 * 说明:
 *  1 ≤ m ≤ n ≤ 链表长度。
 *
 * 示例:
 *  输入: 1->2->3->4->5->NULL, m = 2, n = 4
 *  输出: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (!head || head.next === null || m >= n) {
    return head;
  }

  var i = 1;
  var node = head.next;
  var left;
  var right;
  var first;
  var middle;
  var middleLast;

  if (i < m) {
    left = head;
    first = head;
  } else {
    const temp = new ListNode(head.val);
    middle = temp;
    middleLast = temp;
  }

  while(node && i <= n + 1) {
    i ++;
    if (i < m) {
      left = node;
    } else if (i >= n) {
      right = node;
      break;
    } else {
      const temp = new ListNode(node.val);
      if (!middle) {
        middle = temp;
        middleLast = temp;
      } else {
        temp.next = middle;
        middle = temp;
      }
    }

    node = node.next;
  }

  if (!first) {
    first = middle;
  } else {
    left.next = middle;
  }

  if (right) {
    middleLast.next = right;
  }

  return first;
};
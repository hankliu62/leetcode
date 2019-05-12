/**
 * 奇偶链表 https://leetcode-cn.com/problems/odd-even-linked-list/ [中等]
 *
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
 *
 * 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。
 *
 * 示例 1:
 *  输入: 1->2->3->4->5->NULL
 *  输出: 1->3->5->2->4->NULL
 *
 * 示例 2:
 *  输入: 2->1->3->5->6->4->7->NULL
 *  输出: 2->3->6->7->1->5->4->NULL
 *
 * 说明:
 *  - 应当保持奇数节点和偶数节点的相对顺序。
 *  - 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
 */

/**
 * 解题思路:
 *  方法一：暴力法、循环使用odd, even两个变量分别表示奇数节点和偶数节点，最后再拼接起来，注意，赋值时不要直接等于循环节点，而应该使用new ListNode(循环节点.val)
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  var odd = new ListNode(head.val);
  head = head.next;
  var result = odd;
  var even = new ListNode(head.val);
  var firstEven = even;
  head = head.next;

  var i = 2;
  while(head) {
    if (i % 2 === 0) {
      odd.next = new ListNode(head.val);
      odd = odd.next;
    } else {
      even.next = new ListNode(head.val);
      even = even.next
    }

    head = head.next;
    i ++;
  }

  odd.next = firstEven;

  return result;
};

/**
 * 两数相加 https://leetcode-cn.com/problems/add-two-numbers/ [中等]
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。
 * 其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 *
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 示例：
 *  输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 *  输出：7 -> 0 -> 8
 *  原因：342 + 465 = 807
 */

/**
 * 解题思路:
 *  方法一：暴力法
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var num = l1.val + l2.val;
  var inc = Math.floor(num / 10);
  var res = new ListNode(num % 10);
  var result = res;
  while(l1.next || l2.next || inc) {
      num = (l1.next || { val: 0 }).val + (l2.next || { val: 0 }).val + inc;
      inc = Math.floor(num / 10);
      var newRes = new ListNode(num % 10);
      res.next = newRes;
      res = newRes;
      l1 = l1.next || {};
      l2 = l2.next || {};
  }

  return result;
};
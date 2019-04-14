/**
 * 删除排序链表中的重复元素 II https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/ [中等]
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 *
 * 示例 1:
 *  输入: 1->2->3->3->4->4->5
 *  输出: 1->2->5
 *
 * 示例 2:
 *  输入: 1->1->1->2->3
 *  输出: 2->3
 */

/**
 * 解题思路：
 *  暴力法: 循环ListNode, 当当前元素与它的上一个元素和下一个元素不相等时，push到结果列表数组中，最后将结果列表数据组合成ListNode
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
var deleteDuplicates = function(head) {
  var result = [];
  if (!head || head.next === null) {
    return head;
  }

  if (head.next.val !== head.val) {
    result.push(head);
    head = head.next;
  }

  var previous;
  while (head !== null) {
    if ((previous && previous.val === head.val) || (head.next && head.next.val === head.val)) {

    } else {
      result.push(head);
    }

    previous = head;
    head = head.next;
  }

  if (!result.length) {
    return null;
  }

  var list = result.shift();
  list.next = null;
  var head = list;
  for (var node of result) {
    list.next = node;
    list.next.next = null;
    list = list.next;
  }

  return head;
};

/**
 * 删除排序链表中的重复元素 https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/ [简单]
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 *
 * 示例 1:
 *  输入: 1->1->2
 *  输出: 1->2
 *
 * 示例 2:
 *  输入: 1->1->2->3->3
 *  输出: 1->2->3
 */

/**
 * 解题思路：
 *  暴力法: 循环ListNode, 当当前元素与它下一个元素不相等时，push到结果列表数组中，最后将结果列表数据组合成ListNode
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

  while (head !== null) {
    if (head.next && head.next.val === head.val) {

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

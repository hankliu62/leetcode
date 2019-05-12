/**
 * 排序链表 https://leetcode-cn.com/problems/sort-list/ [中等]
 *
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 *
 * 示例 1:
 *  输入: 4->2->1->3
 *  输出: 1->2->3->4
 *
 * 示例 2:
 *  输入: -1->5->3->4->0
 *  输出: -1->0->3->4->5
 */

/**
 * 解题思路：
 *  方法一: 插入排序，重新定义一个临时数组，循环列表，插入到数组中
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
var sortList = function(head) {
  const nodes = [];

  if (!head || !head.next) {
    return head;
  }

  nodes.push(head);
  head = head.next;

  while(head) {
    for (var i = 0, len = nodes.length; i < len; i ++) {
      if (head.val < nodes[i].val) {
        if (i === 0) {
          nodes.unshift(head);
        } else {
          nodes.splice(i, 0, head);
        }
        break;
      }
    }

    if (i === len) {
      nodes.push(head);
    }

    head = head.next;
  }

  head = nodes[0];
  for(var i = 1, len = nodes.length; i < len; i ++) {
    nodes[i - 1].next = nodes[i];
  }

  nodes[len - 1].next = null;

  return head;
};

/**
 * k个一组翻转链表
 *
 * 给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。
 *
 * 示例 :
 *  给定这个链表：1->2->3->4->5
 *  当 k = 2 时，应当返回: 2->1->4->3->5
 *  当 k = 3 时，应当返回: 3->2->1->4->5
 *
 * 说明 :
 *  - 你的算法只能使用常数的额外空间。
 *  - 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head) {
    return null;
  }

  if (k <= 1) {
    return head;
  }

  var listGroups = [];
  var list = [head]
  while(head.next) {
    if (list.length === k) {
      listGroups.push(list);
      list = [];
    }

    list.push(head.next);
    head = head.next;
  }

  if (list.length) {
    listGroups.push(list);
  }

  var result;
  var node;
  for (var lists of listGroups) {
    if (lists.length !== k) {
      lists = lists.reverse();
    }

    for (var i = lists.length - 1; i >= 0; i --) {
      if (!node) {
        node = new ListNode(lists[i].val);
        result = node;
      } else {
        node.next = new ListNode(lists[i].val);
        node = node.next;
      }
    }
  }

  return result;
};
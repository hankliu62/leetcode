/**
 * 合并两个有序链表
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *  输入：1->2->4, 1->3->4
 *  输出：1->1->2->3->4->4
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
var mergeTwoLists = function(l1, l2) {
  var lists = [l1, l2].filter(function(item) { return !!item }).sort(function(a, b) { return a.val - b.val; });
  var result = null;
  var node = null;
  while(lists.length) {
    if (node) {
      node.next = new ListNode(lists[0].val);
      node = node.next;
    } else {
      node = new ListNode(lists[0].val);
      result = node;
    }
    if (lists[0].next) {
      lists[0] = lists[0].next;
    } else {
      lists.splice(0, 1);
    }

    lists = lists.sort(function(a, b) { return a.val - b.val; });
  }

  return result;
};
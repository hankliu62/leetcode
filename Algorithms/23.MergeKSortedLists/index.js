/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例:
 *  输入:
 *  [
 *    1->4->5,
 *    1->3->4,
 *    2->6
 *  ]
 *  输出: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  lists = lists.filter(function(item) { return !!item }).sort(function(a, b) { return a.val - b.val; });
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
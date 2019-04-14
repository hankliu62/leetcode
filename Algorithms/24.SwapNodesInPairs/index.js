/**
 * 两两交换链表中的节点
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 * 示例:
 *  给定 1->2->3->4, 你应该返回 2->1->4->3.
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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  return reverseKGroup(head, 2);
};
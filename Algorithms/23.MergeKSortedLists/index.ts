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
 * 解题思路：
 *  分治法
 */

/**
 * Definition for singly-linked list.
 *
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 || !list2) {
    return list1 || list2
  }

  const temp = new ListNode();
  let node = temp;

  while(list1 && list2) {
    if (list1.val > list2.val) {
      node.next = list2
      list2 = list2.next;
      node = node.next
    } else {
      node.next = list1
      list1 = list1.next;
      node = node.next
    }
  }

  node.next = list1 || list2;

  return temp.next;
};

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const length = lists.length;
  const mid = length >> 1;

  if (length <= 1) {
    return lists[0] || null;
  }

  const left = mergeKLists(lists.slice(0, mid));
  const right = mergeKLists(lists.slice(mid));

  return mergeTwoLists(left, right);
};

// ===========================

function generateList(array: number[]): (ListNode | null) {
  if (array.length === 0) {
    return null
  }

  const node = new ListNode(array[0]);
  let temp = node;
  for (let i = 1; i < array.length; i ++) {
    temp.next = new ListNode(array[i]);
    temp = temp.next;
  }

  return node;
}

mergeKLists([[1,4,5],[1,3,4],[2,6]].map((item) => generateList(item)))

export {}

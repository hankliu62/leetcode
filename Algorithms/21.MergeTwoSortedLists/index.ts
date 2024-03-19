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

export {}

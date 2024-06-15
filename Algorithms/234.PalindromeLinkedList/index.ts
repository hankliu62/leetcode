
/**
 * 234. 回文链表 https://leetcode.cn/problems/palindrome-linked-list [简单]
 *
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

  示例 1：
    输入：head = [1,2,2,1]
    输出：true
  示例 2：
    输入：head = [1,2]
    输出：false
  提示：
    链表中节点数目在范围[1, 105] 内
    0 <= Node.val <= 9
  进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}


function isPalindrome(head: ListNode | null): boolean {
  let quick = head;
  let slow = head;

  let [pre, node]: [ListNode|null, ListNode|null] = [null, head];

  while (quick && quick.next) {
    quick = quick.next.next;
    slow = slow!.next;

    node!.next = pre
    pre = node;
    node = slow;
  }

  if (quick) {
    slow = slow!.next;
  }

  while (slow) {
    if (slow.val !== pre?.val) {
      return false
    }

    slow = slow.next;
    pre = pre.next;
  }

  return true;
};

export {}

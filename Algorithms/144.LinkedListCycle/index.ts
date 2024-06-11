/**
 * 给你一个链表的头节点 head ，判断链表中是否有环。

  如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

  如果链表中存在环 ，则返回 true 。 否则，返回 false 。

  示例 1：
    [省略图片]
    输入：head = [3,2,0,-4], pos = 1
    输出：true
    解释：链表中有一个环，其尾部连接到第二个节点。

  示例 2：
    [省略图片]
    输入：head = [1,2], pos = 0
    输出：true
    解释：链表中有一个环，其尾部连接到第一个节点。

  示例 3：
    [省略图片]
    输入：head = [1], pos = -1
    输出：false
    解释：链表中没有环。

  提示：
    - 链表中节点的数目范围是 [0, 104]
    - -105 <= Node.val <= 105
    - pos 为 -1 或者链表中的一个 有效索引 。

  进阶：你能用 O(1)（即，常量）内存解决此问题吗？
 *
 * @class ListNode
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
    visited?: boolean
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * 检查给定的链表是否包含循环
 * @param head - 链表的头节点，类型为 ListNode 或 null。若链表为空，则返回 false。
 * @returns 返回一个布尔值，如果链表中存在循环，则为 true；否则为 false。
 */
function hasCycle(head: ListNode | null): boolean {
  // 遍历链表，使用标记来判断是否存在循环
  while (head) {
    // 如果当前节点已经被访问过，说明存在循环
    if (head.visited) {
      return true;
    }

    // 标记当前节点为已访问
    head.visited = true;
    // 移动到下一个节点
    head = head.next;
  }

  // 遍历结束，未发现循环
  return false;
};


/**
 * 检查给定的链表是否包含循环
 * @param head 链表的头节点，类型为ListNode或null。如果链表为空，则返回false。
 * @return 返回一个布尔值，如果链表中存在循环，则为true；否则为false。
 */
function hasCycle2(head: ListNode | null): boolean {
  let fast = head; // 快指针，每次移动2步
  let slow = head; // 慢指针，每次移动1步

  while (fast && fast.next) {
    slow = slow!.next; // 慢指针移动1步
    fast = fast.next.next; // 快指针移动2步
    if (slow === fast) {
      return true; // 如果慢指针和快指针相遇，则链表有环，返回true
    }
  }

  return false; // 如果快指针到达链表尾部，说明链表无环，返回false
};

export {}

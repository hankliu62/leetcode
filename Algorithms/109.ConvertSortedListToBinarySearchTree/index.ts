/**
 * 给定一个单链表的头节点  head ，其中的元素 按升序排序 ，将其转换为 平衡 二叉搜索树。
 *
 * 示例 1:
 * 输入: head = [-10,-3,0,5,9]
 * 输出: [0,-3,9,-10,null,5]
 * 解释: 一个可能的答案是[0，-3,9，-10,null,5]，它表示所示的高度平衡的二叉搜索树。
 *
 * 示例 2:
 * 输入: head = []
 * 输出: []
 *
 * 提示:
 *
 *  - head 中的节点数在[0, 2 * 104] 范围内
 *  - -105 <= Node.val <= 105
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

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
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

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function getArrayByListNode(head: ListNode | null): number[] {
  const result: number[] = [];

  if (head) {
    while (head) {
      result.push(head.val);
      head = head.next;
    }
  }

  return result;
}

function generateTreeNode(array: number[]): TreeNode | null {
  const length = array.length;
  if (length === 0) {
    return null;
  }

  const mid = length >> 1;

  const root = new TreeNode(array[mid]);

  if (length === 1) {
    return root;
  }

  root.left = generateTreeNode(array.slice(0, mid));
  root.right = generateTreeNode(array.slice(mid + 1));

  return root;
}

/**
 * 分治法:
 *  现将链表转换成有序数组，每次取中间元素当成子树的根节点构建，中间元素左边部分当成左子树进行构建，右边部分当成右子树进行构建
 *
 * @param {(ListNode | null)} head
 * @returns {(TreeNode | null)}
 */
function sortedListToBST(head: ListNode | null): TreeNode | null {
  return generateTreeNode(getArrayByListNode(head));
};

export {};

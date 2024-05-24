/**
 * 101. 对称二叉树

  给你一个二叉树的根节点 root ， 检查它是否轴对称。

  示例 1：
    [省略图片]
    输入：root = [1,2,2,3,4,4,3]
    输出：true

  示例 2：
    [省略图片]
    输入：root = [1,2,2,null,3,null,3]
    输出：false

  提示：
    - 树中节点数目在范围 [1, 1000] 内
    - -100 <= Node.val <= 100

  进阶：你可以运用递归和迭代两种方法解决这个问题吗？
 *
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

/**
 * 判断给定的二叉树是否是对称的。
 *
 * 解题思路:
 *  此代码通过递归地比较二叉树的左子树和右子树是否相同，来判断二叉树是否是对称的。
 *
 * @param root - 二叉树的根节点。类型为 TreeNode 或 null。
 * @returns 返回一个布尔值，如果二叉树是对称的则为 true，否则为 false。
 */
function isSymmetric(root: TreeNode | null): boolean {
  // 如果根节点为空，任意树都是对称的
  if (!root) return true;

  /**
   * 辅助函数，用于判断两棵树是否是相同的。
   *
   * @param left - 左子树的根节点。类型为 TreeNode 或 null。
   * @param right - 右子树的根节点。类型为 TreeNode 或 null。
   * @returns 返回一个布尔值，如果两棵树是相同的则为 true，否则为 false。
   */
  function isSameTree(left: TreeNode | null, right: TreeNode | null): boolean {
    // 如果左右子树都为空，认为是相同的
    if (!left && !right) return true;
    // 如果左右子树有一个为空，认为是不相同的
    if (!left || !right) return false;
    // 如果左右子树根节点的值不相同，认为是不相同的
    if (left.val !== right.val) return false;

    // 递归判断左右子树的左子树与右子树是否相同
    return isSameTree(left.left, right.right) && isSameTree(left.right, right.left);
  }

  // 调用辅助函数，判断根节点的左子树与右子树是否对称
  return isSameTree(root.left, root.right);
};

export {};

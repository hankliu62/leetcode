/**
 * 二叉树的中序遍历 https://leetcode-cn.com/problems/binary-tree-inorder-traversal/ [中等]
 *
 * 给定一个二叉树，返回它的中序 遍历。
 *
 * 示例:
 *  输入: [1,null,2,3]
 *     1
 *      \
 *       2
 *      /
 *     3
 *  输出: [1,3,2]
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 */

/**
 * 解题思路:
 *  递归算法
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) {
    return [];
  }

  var result = [];
  if (root.left !== null) {
    result = ([]).concat.apply(result, inorderTraversal(root.left));
  }

  result.push(root.val);

  if (root.right !== null) {
    result = ([]).concat.apply(result, inorderTraversal(root.right));
  }

  return result;
};
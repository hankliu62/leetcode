/**
 * 相同的树 https://leetcode-cn.com/problems/same-tree/ [简单]
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 *
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 *
 * 示例 1:
 *  输入:      1         1
 *            / \       / \
 *           2   3     2   3
 *
 *          [1,2,3],   [1,2,3]
 *
 *  输出: true
 *
 * 示例 2:
 *  输入:      1          1
 *            /           \
 *           2             2
 *
 *          [1,2],     [1,null,2]
 *
 *  输出: false
 *
 * 示例 3:
 *  输入:      1         1
 *            / \       / \
 *           2   1     1   2
 *
 *          [1,2,1],   [1,1,2]
 *
 *  输出: false
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

var getTreeNodes = function(node) {
  if (!node) {
    return [];
  }

  if (!node.left && !node.right) {
    return [node.val];
  }

  var leftNodes = [];
  var rightNodes = [];

  if (node.left) {
    leftNodes = getTreeNodes(node.left);
  }

  if (node.right) {
    rightNodes = getTreeNodes(node.right);
  }

  if (!node.left) {
    leftNodes = ['-'];
  } else if (!node.right) {
    rightNodes = ['-'];
  }
  leftNodes.push(node.val);

  return Array.prototype.concat.apply(leftNodes, rightNodes);
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return getTreeNodes(p).join('') === getTreeNodes(q).join('');
};
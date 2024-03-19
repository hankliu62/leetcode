
/**
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。
 *
 * 示例 1：
 *  输入：nums = [-10,-3,0,5,9]
 *  输出：[0,-3,9,-10,null,5]
 *  解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
 *
 * 示例 2：
 *  输入：nums = [1,3]
 *  输出：[3,1]
 *  解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
 *
 * 提示：
 *  - 1 <= nums.length <= 104
 *  - -104 <= nums[i] <= 104
 *  - nums 按 严格递增 顺序排列
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
 * @param {number[]} nums
 * @returns {(TreeNode | null)}
 */
function sortedArrayToBST(nums: number[]): TreeNode | null {
  return generateTreeNode(nums);
};

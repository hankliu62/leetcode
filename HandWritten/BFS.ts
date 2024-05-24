// 图的节点定义
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode, right?: TreeNode) {
      this.val = (val === undefined ? 0 : val);
      this.left = (left === undefined ? null : left);
      this.right = (right === undefined ? null : right);
  }
}

// 深度优先遍历（DFS）
function dfs(root: TreeNode | null): number[] {
  const result: number[] = [];
  const dfsVisit = (node: TreeNode | null) => {
      if (node === null) {
          return;
      }
      result.push(node.val); // 前序访问
      dfsVisit(node.left);
      dfsVisit(node.right); // 后序访问
  };
  dfsVisit(root);
  return result;
}

// 广度优先遍历（BFS）
function bfs(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (root === null) {
    return result;
  }
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      if (node.left) {
          queue.push(node.left);
      }
      if (node.right) {
          queue.push(node.right);
      }
    }
  }
  return result;
}

// 示例使用
const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(dfs(tree)); // 输出: [1, 2, 3]
console.log(bfs(tree)); // 输出: [1, 2, 3]

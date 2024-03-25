/**
 * N皇后 https://leetcode-cn.com/problems/n-queens/ 困难
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 * 示例1:
 *  输入: 4
 *  输出: [
 *   [".Q..",  // 解法 1
 *    "...Q",
 *    "Q...",
 *    "..Q."],
 *   ["..Q.",  // 解法 2
 *    "Q...",
 *    "...Q",
 *    ".Q.."]
 *  ]
 *
 * 示例 2：
 *  输入：n = 1
 *  输出：[["Q"]]
 *
 *  解释: 4 皇后问题存在两个不同的解法。
 */

/**
 * 解决 N 皇后问题。
 * 给定一个 n × n 的棋盘，要求在棋盘上放置 n 个皇后，使得任意两个皇后都不处于同一行、同一列或同一条对角线上。
 *
 * @param n 棋盘的大小，即 n × n
 * @returns 所有合法的放置方式，每个放置方式都以字符串数组的形式表示，其中 '.' 表示空白位置，'Q' 表示皇后位置。
 */
function solveNQueens(n: number): string[][] {
  const result: string[][] = []; // 存储所有合法的放置方式
  const matrix = Array.from({ length: n }, () => new Array(n).fill('.')); // 初始化棋盘

  // 回溯函数，尝试在每一行放置皇后
  const backtrack = (row: number) => {
    // 如果已经放置到最后一行，则将当前放置方式保存到结果中
    if (row === n) {
      result.push(matrix.map((item) => item.join('')));
      return;
    }

    // 尝试在当前行的每个位置放置皇后
    for (let j = 0; j < n; j ++) {
      // 如果当前位置放置皇后是合法的，则进行递归调用，尝试在下一行放置皇后
      if (isValid(row, j, matrix)) {
        matrix[row][j] = 'Q';
        backtrack(row + 1);
        matrix[row][j] = '.'; // 回溯，将皇后移除
      }
    }
  };

  // 判断当前位置是否合法
  const isValid = (row: number, col: number, matrix: string[][]) => {
    // 检查当前列是否已经存在皇后
    for (let i = 0; i < n; i ++) {
      if (matrix[i][col] === 'Q') {
        return false;
      }
    }

    // 检查左上至右下的对角线是否已经存在皇后
    for (let i = row, j = col; i >= 0 && j >= 0; i --, j --) {
      if (matrix[i][j] === 'Q') {
        return false;
      }
    }

    // 检查右上至左下的对角线是否已经存在皇后
    for (let i = row, j = col; i >= 0 && j < n; i --, j ++) {
      if (matrix[i][j] === 'Q') {
        return false;
      }
    }

    return true; // 当前位置合法
  }

  backtrack(0); // 从第一行开始尝试放置皇后

  return result; // 返回所有合法的放置方式
};

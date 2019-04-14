/**
 * 解数独
 * 编写一个程序，通过已填充的空格来解决数独问题。
 *
 * 一个数独的解法需遵循如下规则：
 *  1.数字 1-9 在每一行只能出现一次。
 *  2.数字 1-9 在每一列只能出现一次。
 *  3.数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 *
 * 空白格用 '.' 表示。
 *
 * 示例：
 *  输入:
 *  [
 *    ["5","3",".",".","7",".",".",".","."],
 *    ["6",".",".","1","9","5",".",".","."],
 *    [".","9","8",".",".",".",".","6","."],
 *    ["8",".",".",".","6",".",".",".","3"],
 *    ["4",".",".","8",".","3",".",".","1"],
 *    ["7",".",".",".","2",".",".",".","6"],
 *    [".","6",".",".",".",".","2","8","."],
 *    [".",".",".","4","1","9",".",".","5"],
 *    [".",".",".",".","8",".",".","7","9"]
 *  ]
 *
 *  输出:
 *  [
 *    ["5","3","4","6","7","8","9","1","2"],
 *    ["6","7","2","1","9","5","3","4","8"],
 *    ["1","9","8","3","4","2","5","6","7"],
 *    ["8","5","9","7","6","1","4","2","3"],
 *    ["4","2","6","8","5","3","7","9","1"],
 *    ["7","1","3","9","2","4","8","5","6"],
 *    ["9","6","1","5","3","7","2","8","4"],
 *    ["2","8","7","4","1","9","6","3","5"],
 *    ["3","4","5","2","8","6","1","7","9"]
 *  ]
 *
 * Note:
 *  - 给定的数独序列只包含数字 1-9 和字符 '.' 。
 *  - 你可以假设给定的数独只有唯一解。
 *  - 给定数独永远是 9x9 形式的。
 */

/**
 * 解题思路:
 *  dfs, 深度优先遍历
 *  能得到最终结果但是在leetcode上执行结果不对，不知道什么原因
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  var isValid = function(board, x, y, val) {
    for (var i = 0; i < 9; i ++) {
      if (board[x][i] === val || board[i][y] === val) {
        return false;
      }
    }

    var startX = Math.floor(x / 3) * 3;
    var startY = Math.floor(y / 3) * 3;

    for (var i = startX; i < startX + 3; i ++) {
      for (var j = startY; j < startY + 3; j ++) {
        if (board[i][j] === val) {
          return false;
        }
      }
    }

    return true;
  }

  var dfs = function(board, x, y) {
    const copyBoard = JSON.parse(JSON.stringify(board));
    if (x === 9) {
      return copyBoard;
    }

    if (copyBoard[x][y] !== '.') {
      if (y === 8) {
        var result = dfs(copyBoard, x + 1, 0);
        if (result) {
          return result;
        }
      } else {
        var result = dfs(copyBoard, x, y + 1);
        if (result) {
          return result;
        }
      }
    } else {
      for (var num = 1; num <= 9; num ++) {
        var numStr = '' + num;
        if (isValid(copyBoard, x, y, numStr)) {
          copyBoard[x][y] = numStr;
          if (y === 8) {
            var result = dfs(copyBoard, x + 1, 0);
            if (result) {
              return result;
            }
          } else {
            var result = dfs(copyBoard, x, y + 1);
            if (result) {
              return result;
            }
          }
        }
      }

    }

    return null;
  }

  return dfs(board, 0, 0);
};

var result = solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]);
console.log(result);
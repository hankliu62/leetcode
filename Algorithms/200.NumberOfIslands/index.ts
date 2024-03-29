/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

  岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

  此外，你可以假设该网格的四条边均被水包围。

  示例 1：
    输入：grid = [
      ["1","1","1","1","0"],
      ["1","1","0","1","0"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"]
    ]
    输出：1

  示例 2：
    输入：grid = [
      ["1","1","0","0","0"],
      ["1","1","0","0","0"],
      ["0","0","1","0","0"],
      ["0","0","0","1","1"]
    ]
    输出：3

  提示：
    - m == grid.length
    - n == grid[i].length
    - 1 <= m, n <= 300
    - grid[i][j] 的值为 '0' 或 '1'
 */

/**
 * 沉岛法
 *
 * 计算给定二维网格中岛屿的数量。
 * 岛屿被定义为由 '1'（陆地）字符组成的完全连接的区域，被 '0'（水域）字符包围。
 *
 * @param grid 二维字符数组表示的地图
 * @returns 返回岛屿的数量
 */
function numIslands(grid: string[][]): number {
  const row = grid.length; // 网格的行数
  const col = grid[0].length; // 网格的列数

  let result = 0; // 记录岛屿数量

  /**
   * 将指定位置的陆地标记为水域，并递归地将与之相连的陆地都标记为水域。
   * @param i 当前行索引
   * @param j 当前列索引
   */
  function sunkenIsland(i: number, j: number) {
    if (grid[i][j] === '1') {
      grid[i][j] = '0'; // 将陆地标记为水域

      // 分别检查上下左右四个方向是否有陆地，如果有，则递归处理
      if (i > 0 && grid[i - 1][j] === '1') {
        sunkenIsland(i - 1, j);
      }

      if (i < row - 1 && grid[i + 1][j] === '1') {
        sunkenIsland(i + 1, j);
      }

      if (j > 0 && grid[i][j - 1] === '1') {
        sunkenIsland(i, j - 1);
      }

      if (j < col - 1 && grid[i][j + 1] === '1') {
        sunkenIsland(i, j + 1);
      }
    }
  }

  // 遍历整个网格，寻找并处理每个岛屿
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        result++; // 发现一个岛屿，计数加一
        sunkenIsland(i, j); // 将该岛屿及与之相连的所有陆地都标记为水域
      }
    }
  }

  return result; // 返回岛屿数量
};



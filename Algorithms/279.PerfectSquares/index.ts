/**
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

  完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

  示例 1：
    输入：n = 12
    输出：3
    解释：12 = 4 + 4 + 4

  示例 2：
    输入：n = 13
    输出：2
    解释：13 = 4 + 9

  提示：
    - 1 <= n <= 104
 * @param n
 */

/**
 * 超时
 *
 * @param n
 * @returns
 */
function numSquares(n: number): number {
  const dp = Array.from({ length: n + 1 }).map((_, i) => i);

  for (let i = 1; i <= n; i ++) {
    if (Math.sqrt(i) % 1 === 0) {
      dp[i] = 1;
    } else {
      for (let j = 1; j <= i; j ++) {
        dp[i] = Math.min(dp[i], dp[j] + dp[i - j])
      }
    }
  }

  return dp[n];
};

function numSquares2(n: number): number {
  const dp = Array.from({ length: n + 1 }).map((_, i) => i);

  for (let i = 1; i <= n; i ++) {
    if (Math.sqrt(i) % 1 === 0) {
      dp[i] = 1;
    } else {
      for (let j = 1; i - j * j >= 0; j ++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
      }
    }
  }

  return dp[n];
};

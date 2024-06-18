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
 * 计算达到给定数字n所需的最小平方数个数
 *
 * @param n 要达到的目标数字
 * @returns 返回达到目标数字n所需的最小平方数个数
 */
function numSquares(n: number): number {
  // 创建一个长度为n+1的数组dp，用于存储达到每个数字所需的最小平方数个数
  const dp = Array.from({ length: n + 1 }).map((_, i) => i);

  // 遍历从1到n的每个数字
  for (let i = 1; i <= n; i ++) {
    // 如果i是一个完全平方数，则达到i所需的最小平方数个数为1
    if (Math.sqrt(i) % 1 === 0) {
      dp[i] = 1;
    } else {
      // 如果i不是完全平方数，则通过动态规划计算达到i所需的最小平方数个数
      for (let j = 1; j <= i; j ++) {
        dp[i] = Math.min(dp[i], dp[j] + dp[i - j]) // 更新dp[i]为达到i所需的最小平方数个数
      }
    }
  }

  // 返回达到目标数字n所需的最小平方数个数
  return dp[n];
};

/**
 * 计算达到给定整数n所需的最小平方数个数
 * @param n 目标整数
 * @returns 返回达到n所需的最小平方数个数
 */
function numSquares2(n: number): number {
  // 初始化动态规划数组，dp[i]表示达到整数i所需的最小平方数个数
  const dp = Array.from({ length: n + 1 }).map((_, i) => i);

  // 遍历1到n的每个整数
  for (let i = 1; i <= n; i ++) {
    // 如果i是完全平方数，则所需平方数个数为1
    if (Math.sqrt(i) % 1 === 0) {
      dp[i] = 1;
    } else {
      // 遍历所有可能的平方数j*j，更新dp[i]为dp[i-j*j]+1的最小值
      for (let j = 1; i - j * j >= 0; j ++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
      }
    }
  }

  // 返回达到n所需的最小平方数个数
  return dp[n];
};

/**
 * 跳跃游戏 II
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 *
 * 实例:
 *  输入: [2,3,1,1,4]
 *  输出: 2
 *  解释: 跳到最后一个位置的最小跳跃数是 2。
 *       从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 *
 * 说明:
 *  假设你总是可以到达数组的最后一个位置。
 */

/**
 * 解题思路：
 *  - 动态规划: (超时)
 *      新建一个steps的数组，记录到达下标i的位置所需要的最小步数；
 *      循环nums数组，到达当前下标i位置的步数，应该是能到达当前下标位置中，前面steps记录中最小步数+1
 *  - 贪心算法:
 *      循环nums数组，使用steps变量记录到达下标i所需要的最小步数，使用currentStepsMaxIndex变量记录当前steps步数所能到达的最大下标；
 *      使用maxIndex变量记录下一步能到达的最大下标，当当前的下标i大于当前steps步数所能到达的最大下标时，当前步数+1，将currentStepsMaxIndex变量重置为maxIndex变量。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dynamicProgrammingJump = function(nums) {
  var length = nums.length;
  var steps = new Array(length);
  steps[0] = 0;

  for (var i = 1; i < length; i ++) {
    var j = i - 1;
    steps[i] = steps[i - 1] + 1;
    while(j >= 0) {
      if (nums[j] >= i - j && steps[i] > steps[j] + 1) {
        steps[i] = steps[j] + 1;
      }

      j --;
    }
  }

  return steps[length - 1];
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  var steps = 0; // 走过的步数
  var currentStepsMaxIndex = 0; // 记录当前步数所达到的最大位置
  var maxIndex = 0; // 记录走过的步数后，再走一步时能达到的最大的下标位置

  for (var i = 0; i < nums.length; i ++) {
    if (currentStepsMaxIndex < i) {
      steps ++;
      currentStepsMaxIndex = maxIndex;
    }

    maxIndex = Math.max(maxIndex, i + nums[i]);
  }

  return steps;
};

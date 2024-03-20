/**
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

  示例 1:
    输入: temperatures = [73,74,75,71,69,72,76,73]
    输出: [1,1,4,2,1,1,0,0]

  示例 2:
    输入: temperatures = [30,40,50,60]
    输出: [1,1,1,0]

  示例 3:
    输入: temperatures = [30,60,90]
    输出: [1,1,0]

  提示：
    - 1 <= temperatures.length <= 105
    - 30 <= temperatures[i] <= 100
 * @param temperatures
 */
function dailyTemperatures(temperatures: number[]): number[] {
  const length = temperatures.length;
  const result: number[] = new Array(length).fill(0);
  const stacks: number[] = [0];

  for (let i = 1; i < length; i ++) {
    if (temperatures[i] > temperatures[stacks[stacks.length - 1]]) {
      while(stacks.length !== 0 && temperatures[i] > temperatures[stacks[stacks.length - 1]]) {
        const index = stacks.pop()!;
        result[index] = i - index;
      }
    }
    stacks.push(i);
  }

  for (const index of stacks) {
    result[index] = 0;
  }

  return result;
};

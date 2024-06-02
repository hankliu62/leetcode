/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

  请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

  示例 1：
    输入：nums = [100,4,200,1,3,2]
    输出：4
    解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
  示例 2：
    输入：nums = [0,3,7,2,5,8,4,6,0,1]
    输出：9

  提示：
    - 0 <= nums.length <= 10 ** 5
    - -10 ** 9 <= nums[i] <= 10 ** 9
 */


/**
 * 计算给定数组中最长连续数序列的长度。
 * @param nums 一个包含不重复整数的数组。
 * @returns 返回数组中最长连续数序列的长度。
 */
function longestConsecutive(nums: number[]): number {
  // 将数组转换为集合，以方便快速查找数组中的元素
  const set = new Set(nums);
  let max = 0; // 记录最长连续数序列的长度

  // 遍历集合中的每个元素，查找并记录最长连续数序列的长度
  for (const num of set) {
    // 如果当前元素的前一个元素不存在于集合中，则当前元素是可能的连续数序列的起点
    if (!set.has(num - 1)) {
      let currentNum = num; // 当前操作的数
      let currentMax = 1; // 当前操作数序列的长度

      // 从当前数开始，向后查找连续的数，直到找不到下一个连续的数为止
      while (set.has(currentNum + 1)) {
        currentNum++;
        currentMax++;
      }

      // 更新最长连续数序列的长度
      max = Math.max(max, currentMax);
    }
  }

  return max; // 返回最长连续数序列的长度
};

/**
 * 使用原生sort方法不会超出空间
 *
 * 计算给定数组中最长连续数字序列的长度。
 * @param nums 包含整数的数组。
 * @returns 返回数组中最长连续数字序列的长度。
 */
function longestConsecutive1(nums: number[]): number {
  const len = nums.length;

  // 如果数组长度小于等于1，则直接返回长度
  if (len <= 1) {
    return len;
  }


  // 调用排序函数，虽然不直接使用结果，但排序操作影响后续逻辑
  nums = nums.sort((a, b) => a - b);

  let max = 0; // 记录最长连续序列长度
  let current = 1; // 记录当前连续序列长度
  for (let i = 1; i < len; i ++) {
    if (nums[i] === nums[i - 1]) {
      // 如果当前数字与前一个数字相同，则继续循环，不计算长度
      continue;
    } else if (nums[i] - nums[i - 1] === 1) {
      // 如果当前数字与前一个数字相差1，说明是连续序列的一部分，递增当前连续序列长度
      current ++;
    } else {
      // 如果当前数字与前一个数字相差大于1，说明当前连续序列结束，更新最长连续序列长度，并重置当前连续序列长度
      max = Math.max(max, current);
      current = 1;
    }
  }

  // 循环结束后，再次更新最长连续序列长度，以防最后一段连续序列未被更新
  max = Math.max(max, current);

  return max;
};

/**
 * 超出空间
 *
 * 计算给定数组中最长连续数字序列的长度。
 * @param nums 包含整数的数组。
 * @returns 返回数组中最长连续数字序列的长度。
 */
function longestConsecutive2(nums: number[]): number {
  const len = nums.length;

  // 如果数组长度小于等于1，则直接返回长度
  if (len <= 1) {
    return len;
  }

  /**
   * 使用快速排序算法对数组进行排序。
   * @param nums 待排序的数字数组。
   * @returns 排序后的数字数组。
   */
  function quickArray(nums: number[]): number[] {
    // 当数组长度小于等于1时，直接返回数组，无需排序
    if (nums.length <= 1) return nums;

    // 从数组中选择一个中间值作为基准
    const mid = nums.splice(nums.length >>> 1, 1)[0];
    const left = []; // 创建一个数组存放小于基准值的元素
    const right = []; // 创建一个数组存放大于等于基准值的元素

    // 遍历数组，将元素分别放入left和right数组
    for (const num of nums) {
      if (num < mid) {
        left.push(num);
      } else {
        right.push(num);
      }
    }

    // 递归地对left和right数组进行排序，然后将它们与基准值合并
    return quickArray(left).concat(mid, quickArray(right));
  }

  // 调用快速排序函数，虽然不直接使用结果，但排序操作影响后续逻辑
  nums = quickArray(nums);

  let max = 0; // 记录最长连续序列长度
  let current = 1; // 记录当前连续序列长度
  for (let i = 1; i < len; i ++) {
    if (nums[i] === nums[i - 1]) {
      // 如果当前数字与前一个数字相同，则继续循环，不计算长度
      continue;
    } else if (nums[i] - nums[i - 1] === 1) {
      // 如果当前数字与前一个数字相差1，说明是连续序列的一部分，递增当前连续序列长度
      current ++;
    } else {
      // 如果当前数字与前一个数字相差大于1，说明当前连续序列结束，更新最长连续序列长度，并重置当前连续序列长度
      max = Math.max(max, current);
      current = 1;
    }
  }

  // 循环结束后，再次更新最长连续序列长度，以防最后一段连续序列未被更新
  max = Math.max(max, current);

  return max;
};

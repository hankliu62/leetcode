/**
 * 中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。

  例如 arr = [2,3,4] 的中位数是 3 。
  例如 arr = [2,3] 的中位数是 (2 + 3) / 2 = 2.5 。
  实现 MedianFinder 类:

  MedianFinder() 初始化 MedianFinder 对象。

  void addNum(int num) 将数据流中的整数 num 添加到数据结构中。

  double findMedian() 返回到目前为止所有元素的中位数。与实际答案相差 10-5 以内的答案将被接受。

  示例 1：
    输入
    ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
    [[], [1], [2], [], [3], []]
    输出
    [null, null, null, 1.5, null, 2.0]

  解释
    MedianFinder medianFinder = new MedianFinder();
    medianFinder.addNum(1);    // arr = [1]
    medianFinder.addNum(2);    // arr = [1, 2]
    medianFinder.findMedian(); // 返回 1.5 ((1 + 2) / 2)
    medianFinder.addNum(3);    // arr[1, 2, 3]
    medianFinder.findMedian(); // return 2.0

  提示:
    - -105 <= num <= 105
    - 在调用 findMedian 之前，数据结构中至少有一个元素
    - 最多 5 * 104 次调用 addNum 和 findMedian
 */

/**
 * 暴力法，每次先排序，再取值，超时
 *
 * @class MedianFinder
 */
class MedianFinder1 {
  private nums: number[];
  constructor() {
    this.nums = [];
  }

  addNum(num: number): void {
      this.nums.push(num);
  }

  findMedian(): number {
      const length = this.nums.length;
      this.nums.sort((pre, next) => pre - next);
      const mid = length >> 1;

      if (length % 2 === 0) {
          return (this.nums[mid - 1] + this.nums[mid]) /2;
      }

      return this.nums[mid];
  }
}

/**
 * 插入时，进行二分查找，先二分插入排序
 *
 * @class MedianFinder
 */
class MedianFinder {
  private nums: number[];
  constructor() {
    this.nums = [];
  }

  addNum(num: number): void {
    let left = 0;
    let right = this.nums.length;

    while (left < right) {
      const mid = left + ((right - left) >> 1);

      if (this.nums[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    this.nums.splice(left, 0, num);
  }

  findMedian(): number {
      const length = this.nums.length;
      this.nums.sort((pre, next) => pre - next);
      const mid = length >> 1;

      if (length % 2 === 0) {
          return (this.nums[mid - 1] + this.nums[mid]) /2;
      }

      return this.nums[mid];
  }
}

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/

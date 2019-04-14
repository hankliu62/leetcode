/**
 * 插入区间 https://leetcode-cn.com/problems/insert-interval/ [困难]
 *
 * 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 *
 * 示例 1:
 *  输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
 *  输出: [[1,5],[6,9]]
 *
 * 示例 2:
 *  输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 *  输出: [[1,2],[3,10],[12,16]]
 *  解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 */

/**
 * 解题思路：
 *  暴力法：先插入再合并
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  var insertedIndex = -1;
  var start = 0;
  for (var i = 0; i < intervals.length; i ++) {
    if (intervals[i].start >= newInterval.start) {
      insertedIndex = i;
      break;
    }
  }

  if (insertedIndex === -1) {
    intervals.push(newInterval);
  } else {
    intervals.splice(insertedIndex, 0, newInterval);
  }

  while (i < intervals.length) {
    if (intervals[i - 1] && intervals[i - 1].end >= intervals[i].start) {
      intervals[i - 1].end = Math.max(intervals[i - 1].end, intervals[i].end);
      intervals.splice(i, 1);
    } else {
      i ++;
    }
  }

  return intervals;
};

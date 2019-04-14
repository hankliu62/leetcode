/**
 * 合并区间 https://leetcode-cn.com/problems/merge-intervals/ [中等]
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 *
 * 示例 1:
 *  输入: [[1,3],[2,6],[8,10],[15,18]]
 *  输出: [[1,6],[8,10],[15,18]]
 *  解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 * 示例 2:
 *  输入: [[1,4],[4,5]]
 *  输出: [[1,5]]
 *  解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
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
 * @return {Interval[]}
 */
var merge = function(intervals) {
  var sortedIntervals = intervals.sort(function(a, b) { return a.start - b.start });
  var i = 1;
  while (i < sortedIntervals.length) {
    if (sortedIntervals[i - 1].end >= sortedIntervals[i].start) {
      sortedIntervals[i - 1].end = Math.max(sortedIntervals[i - 1].end, sortedIntervals[i].end);
      sortedIntervals.splice(i, 1);
    } else {
      i ++;
    }
  }

  return sortedIntervals;
};
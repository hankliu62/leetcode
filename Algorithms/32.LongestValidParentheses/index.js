/**
 * 最长有效括号
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 *
 * 示例 1:
 *  输入: "(()"
 *  输出: 2
 *  解释: 最长有效括号子串为 "()"
 *
 * 示例 2:
 *  输入: ")()())"
 *  输出: 4
 *  解释: 最长有效括号子串为 "()()"
 */

/**
 * 解题思路:
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  var leftBrackets = [];
  var brackets = s.split('');
  var matchedItems = [];
  for (var i = 0; i < brackets.length; i ++) {
    if (brackets[i] === '(') {
      temp = null;
      leftBrackets.push({ index: i });
    } else {
      if (leftBrackets.length) {
        var item = leftBrackets.pop();
        item.total = 2;
        var length = matchedItems.length;
        if (length) {
          if (matchedItems[length - 1].index === item.index - 1) {
            matchedItems[length - 1].total += 2;
          } else if (matchedItems[length - 1].index + matchedItems[length - 1].total === item.index) {
            matchedItems[length - 1].total += 2;
          } else if (matchedItems[length - 1].index - 1 === item.index) {
            item.total += matchedItems[length - 1].total;
            matchedItems[length - 1] = item;
          }  else if (item.index + item.total === matchedItems[length - 1].index) {
            item.total += matchedItems[length - 1].total;
            matchedItems[length - 1] = item;
          } else {
            matchedItems.push(item);
          }

          if (matchedItems.length > 1) {
            var last = matchedItems.pop();
            var pre = matchedItems.pop();
            while(pre) {
              if (last.index - 1 === pre.index) {
                pre.total += last.total;
                last = pre;
                pre = matchedItems.pop();
              } else if (last.index === pre.index + pre.total) {
                pre.total += last.total;
                last = pre;
                pre = matchedItems.pop();
              } else {
                matchedItems.push(pre);
                pre = null;
              }
            }

            matchedItems.push(last);
          }

        } else {
          matchedItems.push(item);
        }
      }
    }
  }

  matchedItems = matchedItems.sort(function(a, b) { return b.total - a.total; });

  return (matchedItems[0] || { total: 0 }).total;
};

console.log(longestValidParentheses(")()())((()))(()()())"))
console.log(longestValidParentheses("()(((()(()))))"))
console.log(longestValidParentheses("(()"))
console.log(longestValidParentheses(")()())"))
console.log(longestValidParentheses(")(("))
console.log(longestValidParentheses("()(())"))
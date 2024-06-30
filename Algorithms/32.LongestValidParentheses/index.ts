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
 * 计算字符串中最长有效括号的长度。
 * 解决方案: 通过遍历输入字符串s来寻找最长的有效括号序列。使用一个栈stacks来存储索引，
 *  栈中的元素代表了尚未匹配的左括号的索引。初始时，将-1压入栈中，这代表了合法括号序列的起始位置。
 *  每次遇到一个右括号，会检查栈顶的索引对应的字符是否是左括号，
 *  如果是，则出栈，并计算当前有效括号长度（i - stacks[stacks.length - 1]），并更新res为最大长度。
 *  如果当前字符不是右括号，就直接将其索引入栈。最终，res保存了最长有效括号序列的长度。
 * @param s 字符串，只包含'('和')'字符。
 * @return 返回最长有效括号的长度。
 */
function longestValidParentheses(s: string): number {
  // 初始化一个栈用于存储括号索引，初始值为-1，代表合法括号序列的起始位置
  const stacks = [-1];
  let res = 0; // 记录最长有效括号长度

  // 遍历字符串中的每个字符
  for (let i = 0, len = s.length; i < len; i++) {
    // 如果当前字符为')'且栈顶字符对应的'('，则出栈，并更新最长有效括号长度
    if (s[i] === ')' && s[stacks[stacks.length - 1]] === '(') {
      stacks.pop();
      res = Math.max(res, i - stacks[stacks.length - 1]);
    } else {
      // 如果当前字符为'('或其他字符，则入栈
      stacks.push(i);
    }
  }

  return res;
};

/**
 * 有效的括号
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 *  左括号必须用相同类型的右括号闭合。
 *  左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *  输入: "()"
 *  输出: true
 *
 * 示例 2:
 *  输入: "()[]{}"
 *  输出: true
 *
 * 示例 3:
 *  输入: "(]"
 *  输出: false
 *
 * 示例 4:
 *  输入: "([)]"
 *  输出: false
 *
 * 示例 5:
 *  输入: "{[]}"
 *  输出: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s: string): boolean {
  const matched: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  const temp: string[] = [];
  for (let i = 0, len = s.length; i < len; i ++) {
    const char = s[i];

    if (char in matched) {
      const leftChar = temp.pop();

      if (matched[char] === leftChar) {
        continue;
      }

      return false;
    }

    temp.push(char);
  }

  return temp.length === 0
};

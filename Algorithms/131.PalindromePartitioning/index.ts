/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案。

  示例 1：
    输入：s = "aab"
    输出：[["a","a","b"],["aa","b"]]

  示例 2：
    输入：s = "a"
    输出：[["a"]]

  提示：
    - 1 <= s.length <= 16
    - s 仅由小写英文字母组成
 */

function partition(s: string): string[][] {
  const result: string[][] = [];
  const current: string[] = [];
  function isPalindrome(str: string) {
    const len = str.length;
    let left = 0;
    let right = len - 1;

    while (left < right) {
      if (str[left ++] !== str[right --]) {
        return false;
      }
    }

    return true;
  }

  function backtrack(index: number) {
    if (index >= s.length) {
      result.push(current.slice());
      return;
    }

    for (let i = index; i < s.length; i++) {
        const str = s.slice(index, i + 1);
        if (isPalindrome(str)) {
          current.push(str);
          backtrack(i + 1);
          current.pop();
      }
    }
  }

  backtrack(0);

  return result;
}

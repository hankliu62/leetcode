/**
 * 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。

  注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。

  返回一个表示每个字符串片段的长度的列表。

  示例 1：
    输入：s = "ababcbacadefegdehijhklij"
    输出：[9,7,8]
    解释：
    划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
    每个字母最多出现在一个片段中。
    像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。

  示例 2：
    输入：s = "eccbbbbdec"
    输出：[10]

  提示：
    - 1 <= s.length <= 500
    - s 仅由小写英文字母组成
 * @param s
 */
function partitionLabels(s: string): number[] {
  const result: number[] = [];
  const charMaxIndex = new Map<string, number>();
  const len = s.length;

  for (let i = 0; i < len; i++) {
    charMaxIndex.set(s[i], i);
  }
  let start = 0;
  let end = 0;
  for (let i = 0; i < len; i++) {
    const char = s[i];
    end = Math.max(end, charMaxIndex.get(char)!);
    if (i === end) {
      result.push(end - start + 1);
      start = end + 1;
    }
  }

  return result;
};


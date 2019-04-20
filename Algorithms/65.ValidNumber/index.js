/**
 * 有效数字 https://leetcode-cn.com/problems/valid-number/ [困难]
 *
 * 验证给定的字符串是否为数字。
 *
 * 例如:
 * "0" => true
 * " 0.1 " => true
 * "abc" => false
 * "1 a" => false
 * "2e10" => true
 *
 * 说明: 我们有意将问题陈述地比较模糊。在实现代码之前，你应当事先思考所有可能的情况。
 *
 * 更新于 2015-02-10:
 * C++函数的形式已经更新了。如果你仍然看见你的函数接收 const char * 类型的参数，请点击重载按钮重置你的代码。
 */

/**
 * 解题思路：
 *  s[i]
 *  空    如果前面什么都没有，继续
 *        否则后面什么都不能有
 *
 *  Num   前面如果有e，则后面不能有+-
 *
 *  e     前面必须有Num
 *        前面不能有e
 *        后面必须有Num
 *
 *  +-    如果前面有Num，前面一定要有e
 *        如果前面有. 前面一定要有Num，有e
 *        如果前面有 +-，前面一定有Num，有e
 *        如果前面有e，前面一定要有Num
 *
 *  .     前面不能有.
 *        前面不能有e
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {

};
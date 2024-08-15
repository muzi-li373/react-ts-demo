/*
 * @Author: zcy
 * @Date: 2024-08-01 20:16:36
 * @LastEditors: zcy
 * @LastEditTime: 2024-08-15 19:53:55
 * @Description: 自定义prettierrc
 */

module.exports = {
  // 箭头函数只有一个参数，忽略括号
  arrowParens: "avoid",
  // 括号内不要空格
  bracketSpacing: true,
  // 行结束用Unix风格
  endOfLine: "lf",
  // true: Put > on the last line instead of at a new line
  jsxBracketSameLine: false,
  // 行宽
  printWidth: 100,
  // 换行方式
  proseWrap: "preserve",
  // 分号
  semi: true,
  // 单引号
  // singleQuote: true,
  // 缩进
  tahWidth: 2,
  // 使用tab缩进
  useTabs: false,
  // 后置逗号，多行对象、数组在最后一行加逗号
  trailingComma: "es5",
  parser: "typescript",
  // 对象属性不换行
  jsxSingleQuote: false,
  // 末尾逗号
  trailingComma: "es5",
};

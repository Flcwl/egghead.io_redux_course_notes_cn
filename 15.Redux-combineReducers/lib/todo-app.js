/**
 * 使用`combineReducers`组合而生成新的`Reducer`，返回一个新的组合对象，包含：
 * todoList[]       todo数组
 * visibilityFilter 过滤显示类型的字符串
 */
const { combineReducers } = require('redux');
const todos = require('./todos');
const visibilityFilter = require('./visibility-filter');

const todoApp = combineReducers({
  // 映射每个`reducers`到指定字段名
  // todos: todos,
  // visibilityFilter: visibilityFilter

  // 如上当属性名和`reducer`的变量名相同
  // 则可以使用ES6属性缩写特性`object literal shorthand notation`
  todos,  // 等同于 todos: todos
  visibilityFilter
});

module.exports = todoApp;

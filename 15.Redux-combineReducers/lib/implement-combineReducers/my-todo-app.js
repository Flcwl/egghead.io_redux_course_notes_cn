/**
 * 使用仿造的`combineReducers`组合而生成新的`Reducer`，返回一个新的组合对象，包含：
 * todoList[]       todo数组
 * visibilityFilter 过滤显示类型的字符串
 */
const combineReducers = require('./combineReducers');
const todos = require('../todos');
const visibilityFilter = require('../visibility-filter');

const myTodoApp = combineReducers({
  // 字段名尽量和Reducer方法名一致
  todos,
  visibilityFilter
});

module.exports = myTodoApp;

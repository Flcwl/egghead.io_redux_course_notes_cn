// mocha ./test/test.js 运行测试js代码
var assert = require('assert')

describe('test todo-object correct', () => {
  const Todo = require('../lib/Todo');

  it(`should return todoAfter when the toggleTodo's param is todoBefore`, () => {
    const { toggleTodo } = require('../lib/todo-object');

    const todoBefore = new Todo(0, 'Learn Redux', false);

    const todoAfter = new Todo(0, 'Learn Redux', true);
    
    // 禁止修改或者扩展
    Object.freeze(todoBefore);

    assert.deepEqual(todoAfter, toggleTodo(todoBefore));
  })

})

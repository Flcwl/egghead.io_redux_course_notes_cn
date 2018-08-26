// mocha ./test/test.js 运行测试js代码
var assert = require('assert')

describe('test todos correct', () => {
  const { todos } = require('../lib/todos');

  it(`should return stateAfter when the todos's params are (stateBefore, action)`, () => {

    const stateBefore = [];
    // action.type = 'ADD_TODO' 下一个状态将是stateAfter
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    }

    // 这里有个小问题，`todo.id`需要是一个自增序列，而不是自行指定。
    const stateAfter = [{
      id: 0,
      text: 'Learn Redux',
      isCompleted: false
    }];

    // 禁止修改或者扩展
    Object.freeze(stateBefore);
    Object.freeze(action);

    assert.deepEqual(stateAfter, todos(stateBefore, action));
  })


  it(`should return stateAfter when the todos's params are (stateBefore, action)`, () => {

    const stateBefore = [
      {
        id: 0,
        text: 'Learn Redux',
        isCompleted: false
      },
      {
        id: 1,
        text: 'Learn Angular',
        isCompleted: false
      }
    ];

    // action.type = 'TOGGLE_TODO' 下一个状态将是stateAfter
    // 切换`id===0`的`todo.isCompleted`字段
    const action = {
      type: 'TOGGLE_TODO',
      id: 0
    }

    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        isCompleted: true
      },
      {
        id: 1,
        text: 'Learn Angular',
        isCompleted: false
      }
    ];

    // 禁止修改或者扩展
    Object.freeze(stateBefore);
    Object.freeze(action);

    assert.deepEqual(stateAfter, todos(stateBefore, action));
  })
})

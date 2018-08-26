// mocha ./test/test.js 运行测试js代码
var assert = require('assert')
var { createStore } = require('redux');

describe('test todos correct', () => {
  
  const { todoApp } = require('../lib/todos');
  // 初始化 填充state
  const store = createStore(todoApp);
  
  it(`init todoApp State when the createStore(todoApp) called`, () => {
    // init
    const initialState = {
      todos: [],
      visibilityFilter: 'SHOW_ALL'
    };
  
    assert.deepEqual(initialState, store.getState());
  })

  it(`should return State1 when action.type = ADD_TODO dispatched`, () => {
    store.dispatch({
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    });
  
    const state1 = {
      // changed
      todos: [
        {
          id: 0,
          text: 'Learn Redux',
          isCompleted: false
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    };

    assert.deepEqual(state1, store.getState());
  })

  it(`should return State2 when action.type = SET_VISIBILITY_FILTER dispatched`, () => {
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED'
    });
  
    const state2 = {
      todos: [
        {
          id: 0,
          text: 'Learn Redux',
          isCompleted: false
        }
      ],
      // changed
      visibilityFilter: 'SHOW_COMPLETED'
    };

    assert.deepEqual(state2, store.getState());
  })

  it(`should return State3 when action.type = TOGGLE_TODO dispatched`, () => {
    store.dispatch({
      type: 'TOGGLE_TODO',
      id: 0
    });
  
    const state3 = {
      todos: [
        {
          id: 0,
          text: 'Learn Redux',
          // changed
          isCompleted: true
        }
      ],
      visibilityFilter: 'SHOW_COMPLETED'
    };

    assert.deepEqual(state3, store.getState());
  })
})

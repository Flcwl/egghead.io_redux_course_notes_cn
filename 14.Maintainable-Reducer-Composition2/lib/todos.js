/**
 * todos
 * @param {Array<Todo>}  state  `todoList`的先前状态
 * @param {Object}  action  包含`type`字段的对象
 * @returns {Array<Todo>}  `todoList`的下一个状态
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        // undefined 即表示没有传参
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(item => todo(item, action) );
    default:
      return state;
  }
}

// reducer composition
// 拆分出来的对单个todo的操作，这里的`state`即表示单个todo
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        isCompleted: false
      };
    case 'TOGGLE_TODO':
      return state.id !== action.id ? state : {
        ...state,
        isCompleted: !state.isCompleted
      };
    default:
      return state; // 这一步是重要的，避免不必要的bug
  }
}

/**
 * 过滤显示器，共有三个状态：
 *  SHOW_ALL        显示所有
 *  SHOW_COMPLETED  显示已完成
 *  SHOW_ACTIVE     显示未完成
 * @param {string} state 
 * @param {Object} action 
 */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

/**
 * 组合而成的新的`Reducer`，返回一个新的组合对象，包含：
 * todoList[]       todo数组
 * visibilityFilter 过滤显示类型的字符串
 */
const todoApp = (state = {}, action) => {
  // 这里我们可以看到，并没有改的上个例子的代码，而是直接拿来组成一个新的`Reducer`
  // reducer composition 优点可见一斑
  return {
    // 初始化时state = {}, 空对象没有定义的属性都是undefined 不会报`not defined`错误
    todos: todos(
      state.todos, 
      action
    ),
    visibilityFilter: visibilityFilter(
      state.visibilityFilter,
      action
    )
  }
}

module.exports = { todos, todoApp };

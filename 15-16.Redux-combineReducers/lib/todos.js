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
      return state.map(item => todo(item, action));
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

module.exports = todos;

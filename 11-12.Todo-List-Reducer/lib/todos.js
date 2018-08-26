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
        {
          id: action.id,
          text: action.text,
          isCompleted: false
        }
      ];
    case 'TOGGLE_TODO':
      // `map`返回每个元素调用回调后的一个新的数组，并且不修改调用它的原数组本身
      return state.map(todo => {
        return todo.id !== action.id ? todo : {
          ...todo,
          isCompleted: !todo.isCompleted
        };
      });
    default:
      return state;
  }
}

module.exports = { todos };

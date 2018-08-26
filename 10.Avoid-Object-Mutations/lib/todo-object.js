/**
 * 切换某个Todo的`isCompleted`字段
 * @param {Todo}  todo 包含`isCompleted`的todo对象
 * @returns {Todo}  新的todo
 */
const toggleTodo = (todo) => {
  // todo.isCompleted = !todo.isCompleted;  // wrong way

  // 存在大量冗余的代码
  // let newTodo = {};
  // newTodo = Object.assign(newTodo, todo);
  // newTodo.isCompleted = !newTodo.isCompleted;
  // return newTodo;

  // `assign()`会浅拷贝逐个源对象们自身的可枚举的属性（覆盖性的）到目标对象（第一个参数）,并返回目标对象
  return Object.assign({}, todo, {
    isCompleted: !todo.isCompleted
  });

  // ES6 `...spread operator`
  // return {
  //   ...todo,
  //   isCompleted: !todo.isCompleted
  // };
}

module.exports = { toggleTodo };

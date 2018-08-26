/**
 * 在计数器列表里再增加一个计数器，而该数字数组即代表计数器的状态
 * @param {Array} list  待操作的计数器数组
 * @returns {Array} 新的计数器列表
 */
const addCounter = (list) => {
  // list.push(0);  return list;  // wrong way

  // 为了保证纯函数的定义：不修改原先的对象，我们需要使用`concat()` 或者 ES6: [...list]
  // return list.concat([0]);

  return [...list, 0];  // good way
}


/**
 * 从计数器列表中移除一个计数器
 * @param {Array} list  待操作的计数器数组
 * @param {number} index  将被移除的计数器下标
 * @returns {Array} 一个新的计数器列表
 */
const removeCounter = (list, index) => {
  // list.splice(index, 1);  return list;  // wrong way

  // return list
  //   .slice(0, index)
  //   .concat(list.slice(index + 1));

  // 在这里可以看到ES6代码更清晰
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];  // good way
}


/**
 * 对计数器列表中指定计数器加 + 1
 * @param {Array} list  待操作的计数器数组
 * @param {number} index  待操作计数器下标
 * @returns {Array} 一个新的计数器列表
 */
const incrementCounter = (list, index) => {
  // list[index]++;  return list;  // wrong way

  // return list
  //   .slice(0, index)
  //   .concat(list[index] + 1)
  //   .concat(list.slice(index + 1));

  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];  // good way
}

module.exports = { addCounter, removeCounter, incrementCounter };

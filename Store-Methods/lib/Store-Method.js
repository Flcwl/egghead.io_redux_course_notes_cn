/**
 * Implement of Redux Store
 * @param {function} reducer
 * @returns {Object}  Store 包含Store的三个方法 getState dispatch subscribe
 */
const createStore = (reducer) => {
  let state;  // 内部状态
  let listeners = []; // 监听 stateChange 的订阅者们

  // 返回当前state
  const getState = () => state;

  // 触发指定action
  const dispatch = (action) => {
    // 改变state
    state = reducer(state, action);

    // 发布
    listeners.forEach(listener => listener());
  };

  // 注册订阅
  const subscribe = (listener) => {
    listeners.push(listener);

    // 返回一个该 listener 的 unSubscribe 方法
    return () => {
      // 取消订阅
      listeners = listeners.filter(l => l !== listener);
    }
  }

  // init
  dispatch({});

  return {getState, dispatch, subscribe};
}

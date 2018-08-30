/**
 * 简单实现的combineReducers()，其本质并非如此，学习所用
 * @param {Object}  reducers  映射所有要合并的reducers， 一个key 对应一个Reducer方法
 * @returns {Function}  返回一个合并后的Reducer
 */
const combineReducers = (reducers) => {
  return (state = {}, action) => {
    // 迭代所有Reducers的keys依次进行状态接龙（就像生产线一样加工最终组成成品）
    // 直到合并所有Reducers
    return Object.keys(reducers).reduce(
      (nextState, currentKey) => {

        // 加工 调用与key映射的Reducer方法 并返回的 state 又合并到nextState
        nextState[currentKey] = reducers[currentKey](
          state[currentKey],
          action
        );
        // nextState 并非从 combineReducers 外部传进来的，是可以修改的
        return nextState;
      }, 
      {}  // state 初始默认 {}
    );
  }
}

module.exports = combineReducers;

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

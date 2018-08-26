// mocha ./test/test.js 运行测试js代码
var assert = require('assert')

describe('Counter reducer correct', () => {
  const counter = require('../lib/counter-reducer');
  
  it('should return +1 when the state is 0 & type is "INCREMENT"', () => {
    assert.equal(1, counter(0, {type: 'INCREMENT'}));
  })

  it('should return 0 when the state is 1 & the type is "DECREMENT"', () => {
    assert.equal(0, counter(1, {type: 'DECREMENT'}));
  })

  it('should return 1 when the state is 1 & the type is ""', () => {
    assert.equal(1, counter(1, {type: ''}));
  });

  it('should return -1 when the state is undefined & the type is "DECREMENT"', () => {
    assert.equal(-1, counter(undefined, {type: 'DECREMENT'}));
  });
})

// 参考：https://egghead.io/lessons/react-redux-writing-a-counter-reducer-with-tests

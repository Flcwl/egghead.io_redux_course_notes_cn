// mocha ./test/test.js 运行测试js代码
var assert = require('assert')

describe('test counter-array correct', () => {

  it(`should return [0] when the addCounter's param is ([])`, () => {
    const { addCounter } = require('../lib/counter-array');
    const listBefore = [];
    const listAfter = [0];
    // 禁止修改或者扩展
    Object.freeze(listBefore);
    
    // 不能使用`equal()`, 因为 `[0] == [0]` is false. 
    assert.deepEqual(listAfter, addCounter(listBefore));
  })

  it(`should return [0, 20] when the removeCounter's params are ([0, 10, 20], 1)`, () => {
    const { removeCounter } = require('../lib/counter-array');
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    Object.freeze(listBefore);

    assert.deepEqual(listAfter, removeCounter(listBefore, 1));
  })

  it(`should return [0, 11, 20] when the incrementCounter's params are ([0, 10, 20], 1)`, () => {
    const { incrementCounter } = require('../lib/counter-array');
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    Object.freeze(listBefore);

    assert.deepEqual(listAfter, incrementCounter(listBefore, 1));
  })
})

### Readme

**这里是对上一个实例`TodoList Reducer`的重构以及测试**

由上个例子我们可以看到一个`todos`既包含了对列表todoList的更改，又包含对其中个别元素`todo`的字段的更改。

- 我们可以把每个操作抽离出来。分成更小的纯函数`reducer composition`。
  + 增加代码的可读性，使其便于维护。
  + 并且我们可以多次复用它们，以更好地管理整个`state tree`

**具体细节请参照代码及结果**

### 运行
```
mocha ./test/test.js
```

### 参考
[13. https://egghead.io/lessons/react-redux-reducer-composition-with-arrays](https://egghead.io/lessons/react-redux-reducer-composition-with-arrays)

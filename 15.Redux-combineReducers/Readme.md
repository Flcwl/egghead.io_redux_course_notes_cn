### Readme

**这里是使用`combineReducers`对上一个实例中的`todoApp`的重构以及测试**

- 在这个实例里面，我们把每个reducer但单独放在一个文件里面，使得代码结构更加清晰。

- `combineReducers`接收一个对象，对象包含将要合并的每个Reducer映射关系。

这样简化了我们像上个实例那样手写合并`reducers`的工作量，大大提高了我们效率。

通过简单实现`combineReducers`也可以让我们更好的理解`Redux`以及函数式编程的好处

**It's important to understand functional programming-- functions can take other functions as arguments, and return other functions.**


**具体细节请参照代码及结果**

### 运行
```
mocha ./test/test.js
```

### 参考
[15. https://egghead.io/lessons/react-redux-reducer-composition-with-combinereducers](https://egghead.io/lessons/react-redux-reducer-composition-with-combinereducers)

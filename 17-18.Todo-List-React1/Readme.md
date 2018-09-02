### Readme

**这里是使用React渲染`Todo App`的视图层**

例子是通过`React`和`Redux`实现一个完整的Todos App (react版本 0.14.0)。

包括addTodo 和 toggleTodo 功能

1. `todoApp reducer` 作为该应用的`the root reducer`

2. 通过`createSore()`创建`store`

3. 通过`dispatch(action)`生产出`nextstate`

4. 根据状态改变通知`subscribe`订阅进行回调


通过发布/订阅设计模式，理解整个应用如何监测到`state change`来调用回调`render()`进行渲染。

在回调渲染`render()`函数时，`state`中的todos作为属性`props`传递到组件模板，总是能保持其最新的`state`。

同时，在这个例子中，我们可以看到`Redux`，只有`store.dispatch()`才能改变`state`。


另外合理熟练使用`ES6`的新语法，对我们代码编程是非常有帮助的。

### 运行

打开`public`里的html文件。

点击加减按钮即可触发计数器累加或减。

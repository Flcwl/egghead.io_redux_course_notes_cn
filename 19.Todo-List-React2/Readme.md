### Readme

**这里是使用React渲染`Todo App`的视图层**

例子是通过`React`和`Redux`实现一个完整的Todos App (react版本 0.14.0)。

增加了过滤条件渲染组件，点击不同visibilityFilter，对当前的TodoList进行过滤显示。

从中我们体会到redux的好处就是，什么操作都经过一个`reducer()`来改变应用的`state`。

而每次`stateChange`都会触发对应的订阅事件，然后执行回调函数。

在这个例子中，就通过`Redux`简单明晰地实现了无论什么操作（addTodo or clickFilterLink），
都会很好的自动根据`filter`分组，自动过滤渲染合适的`todos`。同时也方便对`state`的管理。

### 运行

打开`public`里的html文件。

点击加减按钮即可触发计数器累加或减。

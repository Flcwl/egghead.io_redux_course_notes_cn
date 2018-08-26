### Readme

**这里是使用React结合`Store`三个方法的使用示例**
例子是使用react对之前的加减计数器的重构(react版本 0.14.0)。

增加两个加减按钮用来触发对应的`action`，来改变`state`。

让我们完整清晰地看到`Reducer`如何根据`current state`和所触发的的`action`来计算得到整个应用`next state`。

另外也能更好的理解发布/订阅设计模式，整个应用如何监测到`state change`来调用回调`render()`进行渲染。

### 运行

打开`public`里的html文件。

点击加减按钮即可触发计数器累加或减。

### Readme

**这里是对Todo-list-react的重构，目的是使得每个组件灵活并且独立分离**

例子是对17-19节课的 Todo-list-react 的重构 (react版本 0.14.0)。

分离组件的视图和行为，

通过合理的组件分离，就像零件一样可以被独自用来测试和使用。达到工程上的解耦。

第20课：抽离出Todo, Todolist视图层

第21课: 抽离出AddTodo, FilterLink，Footer视图层。


- the presentational components 视图组件

  只关心how things look(视图如何呈现，其它的事件作参数传递进来绑定)

- the container component 容器组件

  包裹需要的`presentational components`，传递来自`store`的数据和事件行为

注：在react中组件都需要一个根元素包裹。

### 运行

打开`public`里的html文件。

点击加减按钮即可触发计数器累加或减。

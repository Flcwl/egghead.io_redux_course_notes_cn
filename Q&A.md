#### Q: 为什么要状态管理？使用场景举例说明。
  首先理解什么是状态，用户的操作事件（e.g: `click`, `mouseover`）、网络请求、数据库操作更新等都可以导致界面的改变，这亦看成是一个应用程序的状态的改变，进而改变了界面（包括`UI & data`）。而Redux就是作这些状态的管理工作的。

#### Q: 为什么这个状态树是 Single Immutable 的？ 
  应用的状态，全存储在一个对象树中，禁止对象的修改，强化了函数式编程方法。
  `state tree`的改变只能是来自应用程序中state mutations，而用户界面的显示内容是由state tree来决定的。

#### Q: action 对开发人员调试维护有什么好处？
  每一个`state`，来自一个唯一的`action`触发。这是可预测的。
  `Action`是一个普通对象，因此可以被日志打印、序列化、储存。当我们调试或测试时可以回放出来。

#### Q: 为什么 Reducer Function 必须是 pere Function？
  It is important that the function is pure (i.e. the state being given to it isn't modified) because it has to return the new object representing the application's new state.

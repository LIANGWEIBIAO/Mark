#React State(状态)    

React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。    
以下实例创建一个名称扩展为 React.Component 的 ES6 类，在 render() 方法中使用 this.state 来修改当前的时间。    
添加一个类构造函数来初始化状态 this.state，类组件应始终使用 props 调用基础构造函数。    
``` javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
  tick() {
    this.setState({
      date: new Date()
    });
  }
 
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
 
ReactDOM.render(
  <Clock />,
  document.getElementById('example')
);
```    

#### 代码执行顺序：   
1. 当 `<Clock /> `被传递给 `ReactDOM.render()` 时，React 调用 Clock 组件的`构造函数`。 由于 Clock 需要显示当前时间，所以使用包含当前时间的对象来`初始化 this.state` 。 我们稍后会更新此状态。      
2. React 然后调用 Clock 组件的 render() 方法。这是 React 了解屏幕上应该显示什么内容，然后 React 更新 DOM 以匹配 Clock 的渲染输出。    
3. 当 Clock 的输出插入到 DOM 中时，React 调用 `componentDidMount()` 生命周期钩子。 在其中，Clock 组件要求浏览器设置一个定时器，每秒钟调用一次 `tick()`。    
4. 浏览器每秒钟调用 `tick()` 方法。 在其中，Clock 组件通过使用包含当前时间的对象调用 `setState()` 来调度`UI更新`。 通过调用 setState() ，React 知道状态已经改变，并`再次调用 render()` 方法来确定屏幕上应当显示什么。 这一次，render() 方法中的` this.state.date` 将不同，所以渲染输出将包含更新的时间，并相应地`更新 DOM`。     
5. 一旦 Clock 组件被从 DOM 中移除，React 会调用 componentWillUnmount() 这个钩子函数，定时器也就会被清除。           



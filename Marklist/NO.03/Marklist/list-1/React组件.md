# React 组件

#### 定义组件
React 组件最常见的定义方法：
```javascript
const  List = React.createClass({
  render: function() {
    return (<ul>{this.props.children}</ul>);
  }
});
```    

或者使用 ES6 类语法：  

```javascript
class List extends React.Component {
  render() {
    return (<ul>{this.props.children}</ul>);
  }
}
```    
又或者使用普通的 JS 函数：
``` javascript
// 无状态函数语法
const List = function(children) {
  return (<ul>{children}</ul>);
};

//ES6 箭头函数语法
const List = (children) => (<ul>{children}</ul>);
```
如果我们需要向组件传递参数，可以使用 this.props 对象,实例如下：    

```javascript
function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}
 

ReactDOM.render(
    <HelloMessage name="Runoob"/>,
    document.getElementById('example')
);
```   

#### 复合组件    
我们可以通过创建多个组件来合成一个组件，即把组件的不同功能点进行分离。    
```javascript
function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
    return (
    <div>
        <Name name="小鸟教程" />
        <Url url="http://www.xb.com" />
        <Nickname nickname="Runoob" />
    </div>
    );
}
 
ReactDOM.render(
     <App />,
    document.getElementById('example')
);
```
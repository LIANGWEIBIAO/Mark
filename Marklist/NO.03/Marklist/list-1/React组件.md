# React 组件

#### 定义组件
我们可以使用函数定义了一个组件：
```javascript
function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
```    

也可以使用 ES6 class 来定义一个组件:    

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
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
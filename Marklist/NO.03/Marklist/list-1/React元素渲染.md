# React 元素渲染

React元素渲染到根DOM节点中，我们通过把它们都传递给 ReactDOM.render() 的方法来将其渲染到页面上：

``` javascript
var myStyle = {color:'red',textAlign:'center'}

class Name extends React.Component {
  render() {
    return <h1 style={myStyle}>网站名称：{this.props.name}</h1>;
  }
}

class Nickname extends React.Component {
  render() {
    return <h1>网站地址：{this.props.nickname}</h1>;
  }
}

function App(props) {
    return (
        <div>
            <Name name={props.name}/>
            <Nickname  nickname={props.nickname}/>
        </div>
    );
}
```
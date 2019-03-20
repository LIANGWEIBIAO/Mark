#React Props    

state 和 props 主要的区别在于  props 是`不可变的`，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。

#### defaultProps
可以通过给组件添加类属性 defaultProps 来配置默认参数。
props 一旦传入，你就不可以在组件内部对它进行修改。
但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果。    
```javascript
class Toggle extends React.Component {
        static defaultProps = {
            likedText: '取消',
            unlikedText: '点赞'
        }     
        
        static propTypes={
            likedText: PropTypes.string
            unlikedText: PropTypes.string
        }

        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};
        }
 
        handleClick() {
            //this.props.likedText = '取消2';  //修改props会报错
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));         
        }
 
        render() {
          return (
            <button onClick={this.handleClick.bind(this)}>
              {this.state.isToggleOn ? this.props.likedText : this.props.unlikedText}
            </button>
          );
        }
      }
 
      ReactDOM.render(
        <Toggle />,
        document.getElementById('root')
      );
}
```
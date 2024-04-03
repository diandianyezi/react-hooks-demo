const { createRoot } = ReactDOM;
const { Component } = React;

const root = createRoot(document.getElementById('app'));

class App extends Component {
    constructor(props) {
        super(props);
        console.info('constructor')
    }
    state = {
        count: 0
    }
    add = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1
        })
    }

    remove = () => {
        root.unmount();
    }
    componentDidMount() {
        console.info('componentDidMount');
    }
    
    // 更新之前获取快照
    getSnapshotBeforeUpdate() {
        console.info('getSnapshotBeforeUpdate');
        return 'getSnapshotBeforeUpdate的value';
    }
    /**
     * 返回一个对象的话，状态就改不了了哎
     * @returns 
     */
    static getDerivedStateFromProps(props) {
        console.info('getDerivedStateFromProps', props);
        return null;
    }

    componentDidUpdate(preProps, preState, snapshotValue) {
        console.info('componentDidUpdate', preProps, preState, snapshotValue);
    }

    // 控制组件更新的阀门
    shouldComponentUpdate() {
        console.info('shouldComponentUpdate');
        return true
    }

    componentWillUnmount() {
        console.info('componentWillUnmount');
    }

    force = () => {
        this.forceUpdate();
    }
    
    render() {
        console.info('render');
        const { count } = this.state;
        return (
            <div>
                <h2>当前求和为{count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.remove}>卸载</button>
                <button onClick={this.force}>强制更新</button>
            </div>
        )
    }
}

// class A extends Component {
//     state = {
//         carName: '奔驰'
//     }

//     changeCar = () => {
//         this.setState({
//             carName: '宝马'
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <div>我是A组件</div>
//                 <button onClick={this.changeCar}>换车</button>
//                 <B carName={this.state.carName}>
                    
//                 </B>
//             </div>
//         )
//     }
// }

// class B extends Component {
//     componentDidMount() {
//         console.info('子组件----componentDidMount')
//     }
//     getSnapshotBeforeUpdate(props) {
//         // 首次渲染不会执行？
//         console.info('子组件----getSnapshotBeforeUpdate', props)
//     }
//     shouldComponentUpdate() {
//         console.info('子组件----shouldComponentUpdate');
//         return true
//     }
//     componentDidUpdate() {
//         console.info('componentDidUpdate');
//     }
//     render() {
//         console.info('组组件----render')
//         return (
//             <div>
//                 我是B组件
//             {this.props.carName}
//             </div>
//         )
//     }
// }
root.render(<App count={199} />)
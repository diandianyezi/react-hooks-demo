const { createRoot, unmountComponentAtNode } = ReactDOM;
const { useState, Component } = React;

const root = createRoot(document.getElementById('app'));

class App extends Component {

    state = {
        opacity: 1,
        timer: null
    }

    changeOpacity = () => {
        const timer = setInterval(() => {
            let { opacity } = this.state;
            opacity -= 0.1;
            if(opacity <= 0) {
                opacity = 1
            }
            this.setState({
                opacity
            })
        }, 200);
        console.info('timer', timer)
        this.setState({
            timer
        })
    }

    remove = () => {
        // 卸载组件
        root.unmount();
    }

    stop = () => {
        clearInterval(this.state.timer);
    }
    continue = () => {
        this.changeOpacity();
    }
    // 组件挂载完毕
    componentDidMount() {
        this.changeOpacity()
    }

    componentDidUpdate() {
        console.info('组件更新啦');
    }

    componentWillUnmount() {
        console.info('组件要销毁了', this.state.timer);
        this.stop();
    }
    // 初始化渲染、状态更新之后
    render() {
        // this.changeOpacity();
        return (
            <>
                <h2 style={{opacity: this.state.opacity}}>react学不会，不活了</h2>
                <button onClick={this.remove}>不活了</button>
                <button onClick={this.stop}>停止</button>
                <button onClick={this.continue}>继续</button>
            </>

        )
    }
}

root.render(<App />)
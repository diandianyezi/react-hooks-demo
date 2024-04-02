const { createRoot } = ReactDOM;
const { useState, Component, createRef } = React;
/**
 * data => state
 * 
 * React => view library
 * 
 * useState 创建一个状态与设置状态的方法。
 */
const root = createRoot(document.getElementById('app'));


class App extends Component {

    state = {
        isHot: true
    }
    
    constructor(props) {
        super(props);
    //     this.inputRef = createRef();
        this.inputRef2 = createRef();
    }
    showData = () => {
        console.info('@');
        console.info(this.inputRef.value)
    }
    showData2 = (event) => {
        console.info(event.target.value)
    }
    changeWeather = () => {
        this.setState({
            isHot: !this.state.isHot,
        })
    }
    render() {
        const { isHot } = this.state;

        return (
            <div>
                <input ref={(current) => {this.inputRef = current; console.log('@', current);}} placeholder="点击按钮提示数据" type="text" />
                <button onClick={this.showData}>点击提示左侧的数据</button>
                <input onBlur={this.showData2} placeholder="失去焦点提示数据" type="text" />
                <br/>
                <h2>今天天气很{isHot ? '炎热' : '凉爽'}</h2>
                <button onClick={this.changeWeather}>点我切换天气</button>
            </div>
        )
    }
}

root.render(<App />)

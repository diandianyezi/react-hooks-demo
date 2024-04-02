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
    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }
    
    render() {
        console.info('render')
        const { count } = this.state;
        return (
            <div>
                <h2>当前求和为{count}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}

root.render(<App />)
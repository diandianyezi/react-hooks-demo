const { createRoot } = ReactDOM;
const { useState, Component } = React;

const root = createRoot(document.getElementById('app'));

class App extends Component {
    state = {
        username: '',
        password: ''
    }
    handleSubmit = (event) => {
        event.preventDefault(); //  阻止表单提交
        const { username, password } = this.state;
        alert(`输入的用户名和密码是：${username}, ${password}`)
    }

    handleNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                用户名 <input type="text" onChange={this.handleNameChange} name="username" /><br/>
                密码 <input type="password" onChange={this.handlePasswordChange} name="password" />

                <button>登录</button>
            </form>
        )
    }
}

root.render(<App />)
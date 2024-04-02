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

    handleFormChange = (type) => {
        return (event) => {
            this.setState({
                [type]: event.target.value
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                用户名 <input type="text" onChange={this.handleFormChange('username')} name="username" /><br/>
                密码 <input type="password" onChange={this.handleFormChange('password')} name="password" />

                <button>登录</button>
            </form>
        )
    }
}

root.render(<App />)
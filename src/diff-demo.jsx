const { createRoot } = ReactDOM;
const { useState, Component } = React;
/**
 * data => state
 * 
 * React => view library
 * 
 * useState 创建一个状态与设置状态的方法。
 */
const root = createRoot(document.getElementById('app'));

class Person extends Component {

    state = {
        persons: [
            {
                id: 1,
                name: '张三',
                age: 18
            },
            {
                id: 2,
                name: '李四',
                age: 18
            }
        ]
    }

    add= () => {
        const { persons } = this.state;
        const p = {
            id: persons.length + 1,
            name: '小王',
            age: 20
        }

        this.setState({
            persons: [
                p,
                ...persons
            ]
        })
    }
    render() {
        return (
            <div>
                <h2>展示人员信息</h2>
                <button onClick={this.add}>添加一个小王</button>
                <ul>
                    {
                        this.state.persons.map((p) => {
                            return (
                                <li key={p.id}>
                                    id: {p.id}, name: {p.name}, age: {p.age}
                                    <input type="text" />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

root.render(<Person />)

//   
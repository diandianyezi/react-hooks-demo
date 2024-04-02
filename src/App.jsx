const { createRoot } = ReactDOM;
const { useState } = React;
/**
 * data => state
 * 
 * React => view library
 * 
 * useState 创建一个状态与设置状态的方法。
 */
const root = createRoot(document.getElementById('app'));

// function App () {

//     let [count, setCount] = useState(0);

//     function updateCount() {
//         setCount(count + 1)
//     }

//     return (
//         <div>
//             <div>{  count }</div>
//             <button onClick={updateCount}>count+1</button>
//         </div>
//     )
// }

class Person extends React.Component {
    render() {
        const { name, age, sex} = this.props
        return (
            <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{sex}</li>
            </ul>
        )
    }
    // 需要引入prop-types.js
    static propTypes = {
        name: PropTypes.string.isRequired,
        sex: PropTypes.string,
        age: PropTypes.number,
        speak: PropTypes.func
    }
    static defaultProps = {
        sex: '女',
        age: 19
    }
}

const p = {
    name: 'r',
    age: 12,
    sex: '男'
}

root.render(<Person {...p} />)

//   
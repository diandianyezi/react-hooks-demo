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

function App () {

    let [count, setCount] = useState(0);

    function updateCount() {
        setCount(count + 1)
    }

    function MyComponent() {
        console.info(this); // undefined
        return <>this</>
    }

    return (
        <div>
            <div>{ count }</div>
            <button onClick={updateCount}>count+1</button>
            <MyComponent />
        </div>
    )
}

root.render(<App />)
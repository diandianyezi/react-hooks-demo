const { createRoot } = ReactDOM;
/**
 * data => state
 * 
 * React => view library
 * 
 */
const root = createRoot(document.getElementById('app'));

function App () {
    return (
        <div>Hello React!!!!</div>
    )
}

root.render(<App />)
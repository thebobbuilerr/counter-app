import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="container">
      <div className="counter-card">
        <h1>Counter</h1>
        
        <div className="count-display">
          <span className={count > 0 ? 'positive' : count < 0 ? 'negative' : ''}>
            {count}
          </span>
        </div>

        <div className="button-group">
          <button onClick={decrement} className="btn decrement">
            −
          </button>
          <button onClick={reset} className="btn reset">
            Reset
          </button>
          <button onClick={increment} className="btn increment">
            +
          </button>
        </div>

        <p className="hint">
          Click + to increase, − to decrease, Reset to clear
        </p>
      </div>
    </div>
  )
}

export default App
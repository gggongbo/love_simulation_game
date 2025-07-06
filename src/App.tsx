import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>🎮 사랑은 네크로노미콘에 써 있어</h1>
        <p>Love is Written in the Necronomicon</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        개발 진행 중...
      </p>
    </>
  )
}

export default App

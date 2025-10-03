import { useState } from 'react'
import Navigations from './navigations/Navigations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navigations />
      </div>
    </>
  )
}

export default App

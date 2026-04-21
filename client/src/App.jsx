import { useState } from 'react'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='bg-neutral-50 min-h-screen scroll-smooth'>
        <HomePage />
      </main>
    </>
  )
}

export default App

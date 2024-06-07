import { useState } from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar />
    </>
  )
}

export default App

import { useState,useEffect } from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import React from 'react';
import { Loading } from './components/simple components';

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Navbar />
      )}
    </>
  )
}

export default App

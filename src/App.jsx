import { useState,useEffect } from 'react'
import React from 'react';
import { Loading } from './components/simple components';
import Navbar_page from './components/Navbar_page';

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
        <Navbar_page />
      )} 
    </>
  )
}

export default App

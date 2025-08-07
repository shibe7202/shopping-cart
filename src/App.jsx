import { useState } from 'react'
import useCart from './components/useCart.jsx'
import './App.css'
import Shop from './components/Shop.jsx'

function App() {
  const cartTools = useCart()

  return (
    <>
      <Shop cartTools={cartTools} />
    </>
  )
}

export default App

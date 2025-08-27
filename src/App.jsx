import useCart from './components/useCart.jsx'
import Shop from './components/Shop.jsx'
import Home from './components/Home.jsx'
import { Outlet } from "react-router-dom";


function App() {
  const cartTools = useCart()

  return (
    <div className='mainContainer'>
      <Outlet context={cartTools} />
    </ div>
  )
}

export default App

import { useState } from 'react'
import Body from '../components/Body'
import Cart from '../components/Cart'
import Header from '../components/Header'
import './App.css'
import { Box } from '@mui/material'
import Theme from '../components/Theme'
import GridComp from '../components/GridComp'

function App() {
  const [cart,setCart]=useState([])
  const [show,setShow]=useState(false)
    const addToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }
    const handleClick=()=>{
      setShow((prevShow) => !prevShow);
    }

  return (
    <Box>
    {/* <Header cart={cart} handleClick={handleClick}/>
    <div style={{display:'flex'}}>
     <Body addToCart={addToCart}/> 
     {show && ( <Cart cart={cart}/>)}
     </div> */}
     <Theme/>
     {/* <GridComp/> */}
    </Box>

  )
}

export default App

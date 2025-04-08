import { useState } from 'react'
import Body from './pages/Body'
import Cart from './pages/Cart'
import Header from './components/Header'
import './App.css'
import { Box } from '@mui/material'
import {  Route, Routes } from 'react-router-dom'

function App() {
  const [cart,setCart]=useState([])
    const addToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }
    
  return (
    <Box sx={{minHeight:'100vh'}}>
      <Header cart={cart}/>
      {/* <Body addToCart={addToCart}/> */}

      <Routes>
           <Route path="/" element={<Body addToCart={addToCart} />} /> 
           <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>  
      
    </Box>


  )
}

export default App

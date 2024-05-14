import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Components/Main/Main'
import Home from '../Components/Home/Home'
import Product from '../Components/Product/Product'
import { AnimatePresence } from 'framer-motion'
import ViewDetails from '../Components/Product/ViewDetails'
import Checkout from '../Components/Checkout/Checkout'
import PlaceOrder from '../Components/Checkout/PlaceOrder'
import Login from '../Auth/Login'


const Approuter = () => {
  return (
    <div>
      <AnimatePresence mode='wait'>
        <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login/>}/>
            <Route path='/' element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path='products' element={<Product/>}/>
            <Route path='viewdetails/:id' element={<ViewDetails/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='placeorder' element={<PlaceOrder/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  )
}

export default Approuter
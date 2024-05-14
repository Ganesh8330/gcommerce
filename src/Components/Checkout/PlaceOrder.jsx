import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 style={{marginBottom:'1rem'}}>Your Order is placed successfully</h1>
      <button onClick={()=>navigate('/')} style={{padding:'10px', border:' 1px solid #3bb77e',cursor:'pointer', background:'#def9ec',color:'#3bb77e',fontSize:'1rem'}}>Continue Shopping</button>
    </div>
  )
}

export default PlaceOrder
import React from 'react'
import logo from '../../Assets/logo.svg'
import { RiMailLine, RiMapPinLine, RiPhoneLine, RiTimeLine } from '@remixicon/react'
import payments from '../../Assets/Payment.png'
import facebook from '../../Assets/Group 18.svg'
import insta from '../../Assets/Group 19.svg'
import twitter from '../../Assets/Group 20.svg'
import linkedin from '../../Assets/Group 21.svg'

const Footer = () => {

  const images = [facebook,insta,twitter,linkedin]


  return (
    <div className='footer' >
      <hr />
      <div className='footer-top'>
        <div className="list-1">
          <div className="list-heading">
            <img src={logo} alt="" className='logo' />
            <div className="text">
              <h2>Smile Shop</h2>
              <p>Grocery</p>
            </div>
            
          </div>
          <div className="items">
            <ul>
              <li><RiMapPinLine className='icon'/><p><span><b>Address:</b></span> 08 School Road, Chennai</p></li>
              <li><RiPhoneLine className='icon'/><p><span><b>Call Us:</b></span> 1234567891</p></li>
              <li><RiMailLine className='icon'/><p><span><b>Email:</b></span> smileshop@gmail.com</p></li>
              <li><RiTimeLine className='icon'/><p><span><b>Work Hours:</b></span> 24/7</p></li>
            </ul>
          </div>
        </div>
        <div className="list-2">
          <div className="list-heading">
            <h2>Account</h2>
          </div>
          <div className="items-2">
            <ul>
              <li>Wishlist</li>
              <li>Cart</li>
              <li>Track Orders</li>
              <li>Shipping Details</li>
            </ul>
          </div>
        </div>
        <div className="list-3">
          <div className="list-heading">
            <h2>Useful Links</h2>
          </div>
          <div className="items">
            <ul>
              <li>About us</li>
              <li>Contact</li>
              <li>Hot deals</li>
              <li>Promotions</li>
              <li>New products </li>
            </ul>
          </div>
        </div>
        <div className="list-4">
          <div className="list-heading">
            <h2>Help Center</h2>
          </div>
          <div className="items">
            <ul>
              <li>Payments</li>
              <li>Refund</li>
              <li>Checkout</li>
              <li>Shipping</li>
              <li>Q&A</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
      </div>
       <hr />

      <div className="footer-bottom">
        <div className="copyrights">
          <p>@2024, All rights reserved</p>
        </div>
        <div className="cards">
          <img src={payments} alt="" />
        </div>
        <div className="social-medias">
          {images.map((img,idx)=>(
            <img src={img} alt="" key={idx} style={{cursor:'pointer'}} />
          ))}
        </div>
      </div>
     
    </div>
  )
}

export default Footer
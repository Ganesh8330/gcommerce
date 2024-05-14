import React from 'react'
import HomeSection from './HomeSection'
import Categories from './Categories'
import HomeCarosel from './HomeCarosel'
import Serve from './Serve'
import HomeFooter from './HomeFooter'
// import Product from '../Product/OurProduct'
import { motion } from 'framer-motion'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:3,ease:"easeInOut"}}} exit={{opacity:0}} className='home'>
      <HomeSection/>
      <Categories/>
      {/* <Product/> */}
      <HomeCarosel/>
      <Serve/>
      <HomeFooter/>
      <Footer/>
      
    </motion.div>
  )
}

export default Home
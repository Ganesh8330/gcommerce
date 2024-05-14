import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fruit, vegetables } from '../../Data/fruits.js';
import drink from '../../Assets/drink.png' // Import both fruit and vegetables
import electronic from '../../Assets/device.png' // Import both fruit and vegetables
import dress from '../../Assets/dress.png' // Import both fruit and vegetables
import veg from '../../Assets/vegetables.png' // Import both fruit and vegetables
import { motion } from "framer-motion";

const Categories = () => {
  const imgs = [{
    name:'Drink',
    image:drink,},
    {
      name:'Electronic',
      image:electronic,},
      {
        name:'Dress',
        image:dress,},
        {
          name:'Vegetables',
          image:veg,},
  ]
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0, 
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 7,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  return (
    <div className='categories'>
      <h1>Top Categories</h1>
      <div className="flex">
      {imgs.map((data,idx)=>(
      <motion.div key={idx} whileHover={{scale:1.1,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',}} className="card">
        <img src={data.image} alt="" />
        <p>{data.name}</p>

      </motion.div>
      ))}
      </div>
      {/* <Slider {...settings}>
        {fruit.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </Slider> */}
    </div>
  )
}

export default Categories;

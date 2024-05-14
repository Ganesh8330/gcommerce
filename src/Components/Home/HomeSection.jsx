import React from "react";
import Grid from "@mui/material/Grid";
import iphone from "../../Assets/iPhone 13.svg";
import location from "../../Assets/location.png";
import food from "../../Assets/food.png";
import truck from "../../Assets/truck.png";
import play from "../../Assets/googleplay.svg";
import app from "../../Assets/appstore.svg";
import twenty from "../../Assets/24-hours (1).png";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <div className="homesection">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="content">
            <p className="free">
              <img src={truck} alt="" className="truck" />
              <span>Free Shipping fee</span>
            </p>
            <div className="heading">
              <h1>
                Make healthy life with <span>fresh</span> grocery{" "}
              </h1>
              <p>
                Get the best quality and most delicious grocery food in the
                world you can get them all use our website
              </p>
              <button>Shop Now</button>
            </div>
            <div className="footer">
              <p><b>Download App:</b></p>

              <div className="img-grp">
                <img src={play} alt="" className="play" />
                <img src={app} alt="" className='play' />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:0,transition:{duration:1,delay:1}}} className="phone_img">
            <img src={iphone} alt="" className="phone" />
            <div className="card3">
              <div className="icon3">
                <img src={twenty} alt="" />
              </div>
              <div className="text3">
              <p><b>Customer Support</b></p>
              <p style={{color:'#3bb77e'}}>24/7</p>
              </div>
              
            </div>
            <div className="card1">
              <div className="icon">
                <img src={location} alt="" />
              </div>
              <div className="text">
                <p>
                  <b>Fast Delivery</b>
                </p>
                <p style={{color:'#3bb77e'}}>Free of cost any Delivery</p>
              </div>
            </div>
            <div className="card2">
              <div className="icon-2">
                <img src={food} alt="" />
              </div>
              <div className="text2">
                <p>
                  <b>100% Fresh</b>
                </p>
                <p style={{color:'#3bb77e'}}>Quality Maintain</p>
              </div>
            </div>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeSection;

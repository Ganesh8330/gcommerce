import { Grid } from "@mui/material";
import { original } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetails } from "../../Redux/detailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../Redux/productSlice";

const ViewDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state)=>state.details.data)
  const cartDetails = useSelector((state)=>state.products.cart)
  const user = useSelector(state => state.products.user)
  const navigate = useNavigate();

  
  useEffect(()=>{
    dispatch(fetchDetails(id))
  },[dispatch,id])

  console.log('data',details);

  console.log(cartDetails);
  
  

  const images = [
    {
      original:details.productImg ,
      thumbnail: details.productImg,
    },
    {
      original:details.productImg ,
      thumbnail: details.productImg,
    },
    {
      original:details.productImg ,
      thumbnail: details.productImg,
    },
  ];

  const handleCart = (cartdetails)=>{

    const addOneTime = cartDetails.some((item)=>item.id === cartdetails.id);

    if(!addOneTime){

      
      dispatch(addtocart(cartdetails))
      
      console.log(cartdetails);


    }

  }

  

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="div-gallery">
        <ImageGallery
            items={images}
            thumbnailPosition={"left"}
            showNav={false}
            showPlayButton={false}
            showFullscreenButton={false}
          />
          </div>
        </Grid>

        <Grid item xs={6}>
          
        
              <div key={details.id} className="details">
                <h2>{details.category}</h2>
                <h1>{details.productName}</h1>
                <p>{details.description}</p>

                <div className="prices">
                  <p>$:<span>{details.price}</span></p>
                </div>
                <button onClick={()=>handleCart(details)}>Add To Cart</button>
              </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewDetails;

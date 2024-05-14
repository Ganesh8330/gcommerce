import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/productSlice";
import { motion } from "framer-motion";
import { Grid } from '@mui/material';
import ProductContainer from './ProductContainer';
import Recommended from './Recommended';
import SideBar from './SideBar';

const Product = () => {


  

  

  return (
    <div className='product_page'>
     
    <Grid container spacing={2}>
      {/* <Grid item xs={3}>
        <SideBar/>
      </Grid> */}
      
      <Grid item xs ={12}>
      <Recommended/>
        <ProductContainer/>
        
        
      {/* <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2,duration:2,ease:"easeInOut"}}} exit={{opacity:0}} className='products_page'>
      {products.map((category) => (
        <div key={category.id}>
          <h2 className='cate_name'>{category.cat_name}</h2>
          {category.items.map((product) => (
            <div key={product.id}>
              <h3 className='sub_cate_name'>{product.cat_name}</h3>
              <div className='prod_flex' >
                {product.products.map((item) => (
                  <div className='prod_card' key={item.id}>
                    <img className='image' src={item.catImg} alt={item.productName} />
                    <h4></h4>
                    <div className="price">
                      <p className='newprice'>${item.price}</p>
                      <p className='oldprice'>${item.oldPrice}</p>
                    </div>
                   
                    <button>View Details</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </motion.div> */}
      </Grid> 
    </Grid>
    </div>
    
  )
}

export default Product
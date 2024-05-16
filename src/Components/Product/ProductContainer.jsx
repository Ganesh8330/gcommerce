import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/productSlice";
import pic from "../../Assets/vegetables.png";
import { RiHeartLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const navigate = useNavigate();

  const[selectedCategory,setSelectedCategory] = useState('All');

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])


  console.log(products);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const truncateProductName = (name) => {
    if (name.length > 20) {
      return name.substring(0, 15) + '...';
    }
    return name;
  };


 



  const handleSelected = (category)=>{

    setSelectedCategory(category)
   
  }


  const filteredProducts = selectedCategory === 'All' ?
    products :
    products.filter(product => product.category === selectedCategory);

  
  return (

    <>
     <div className="recommended">
        <h2>Recommended</h2>
      <div className="recom-btns" style={{marginBottom:'2rem'}}>
        <button  onClick={()=>handleSelected('All')}>All Products</button>
        <button onClick={()=>handleSelected('vegetable')}>Vegetables</button>
        <button onClick={()=>handleSelected('fruit')}>Fruits</button>
      </div>

     
    </div>
      
    <div className="product-container">
      
    {filteredProducts.map((item) => (
      <Paper elevation={4} className="card" key={item.id}>
          <div className="discount"><p>Discount: {item.discount}%</p></div>
        <img src={item.productImg} alt="" className="image" />
        <div className="card-details">
          <h2>{item.productName}</h2>
          <p>
            By <span>{item.sellerName}</span>
          </p>
          <div className="price">
            <p>Price: ${item.price}</p>
          </div>
          <div className="btn-grp">
            <button onClick={()=>navigate(`/viewdetails/${item.id}`)}>View Details</button>
            <button>
              <RiHeartLine/>
            </button>
          </div>
        </div>
      </Paper>
    ))}

</div>
</>
  );
};

export default ProductContainer;

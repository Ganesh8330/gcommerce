import React, { useEffect } from "react";
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

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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

  
  return (
    <div className="product-container">
      
              {products.map((item) => (
                <Paper elevation={4} className="card" key={item.id}>
                    <div className="discount"><p>Discount: {item.discount}%</p></div>
                  <img src={item.productImg} alt="" className="image" />
                  <div className="card-details">
                    <h2>{truncateProductName(item.productName)}</h2>
                    <p>
                      By <span>{item.sellerName}</span>
                    </p>
                    <div className="price">
                      <p>Price: ${item.price}</p>
                    </div>
                    <div className="btn-grp">
                      <button onClick={()=>navigate(`/viewdetails/${item.id}`)}>View Details</button>
                      <button>
                        <RiHeartLine />
                      </button>
                    </div>
                  </div>
                </Paper>
              ))}
         
    </div>
  );
};

export default ProductContainer;

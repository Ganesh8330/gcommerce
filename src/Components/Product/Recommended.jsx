import React from "react";
import { useDispatch } from "react-redux";


const Recommended = () => {
  const dispatch = useDispatch()

  const handleSelected = (category)=>{
   
  }
  return (
    <div className="recommended">
        <h2>Recommended</h2>
      <div className="recom-btns">
        <button  onClick={()=>handleSelected('All')}>All Products</button>
        <button onClick={()=>handleSelected('groceries')}>Groceries</button>
        <button onClick={()=>handleSelected('Electronics')}>Electronics</button>
        <button onClick={()=>handleSelected('Fashion')}>Fashion</button>
      </div>
    </div>
  );
};

export default Recommended;

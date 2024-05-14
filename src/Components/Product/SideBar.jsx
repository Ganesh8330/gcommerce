import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SideBar = () => {
  // State to track the selected radio button
  const [selectedCategory, setSelectedCategory] = useState('');

  const dispatch = useDispatch();


  return (
    <div className='sidebar'>
      <div className="category">
        <h2>Category</h2>
        <div className="input-grps">
          
        </div>
      </div>
      <div className="price">
        {/* Add other elements related to price filtering */}
      </div>
    </div>
  );
};

export default SideBar;

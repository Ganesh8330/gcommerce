import React, { useState } from "react";
import Logo from "../../Assets/logo.svg";
import emptycart from "../../Assets/shopping.png";
import {
  RiDeleteBinLine,
  RiHeartLine,
  RiLogoutBoxRLine,
  RiShoppingCartLine,
} from "@remixicon/react";
import avatar from "../../Assets/avatar.jpg";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, removeCart } from "../../Redux/productSlice";
import { Paper } from "@mui/material";

const Navbar = () => {
  const cart = useSelector((state) => state.products.cart);
  const user = useSelector((state)=>state.products.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user);

  const [open, setOpen] = useState(false);

  const handleCheck = () => {
    setOpen(!open);
  };
  const handleDelete = (id) => {
    dispatch(removeCart(id));
  };

  const userLogout = ()=>{
    dispatch(logout())
  }

  return (
    <motion.nav
      initial={{ y: -200 }}
      animate={{
        y: 0,
        transition: { duration: 2, delay: 1, type: "spring", stiffness: 500 },
      }}
      className="nav_bar"
    >
      <div className={`nav_sidebar ${open ? "move" : ""}`}>
        {cart.length === 0 ? (
          <div
            className="no_card_items"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "8rem",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Your cart is empty</h2>
            <center>
              <img src={emptycart} alt="" style={{ width: "12rem" }} />
            </center>
          </div>
        ) : (
          <Paper className="items">
            {cart.map((data) => (
              <div className="items_card" key={data.id}>
                <div style={{ display: "flex" }}>
                  <img src={data.productImg} alt="" />
                  <div>
                    <h2>{data.productName}</h2>
                    <p>${data.price}</p>
                  </div>
                </div>
                <button onClick={() => handleDelete(data.id)}>
                  <RiDeleteBinLine />
                </button>
              </div>
            ))}
            <button className="checkout" onClick={()=>{setOpen(!open);navigate('checkout')}}>Checkout</button>
          </Paper>
        )}
      </div>
      <img src={Logo} alt="" className="logo" />
      <div className="nav_list">
        <ul>
          <li style={{ color: "black" }}>
            <NavLink to="/">Home</NavLink>
          </li>

          <li style={{ color: "black" }}>
            {" "}
            <NavLink to="/products">Products</NavLink>
          </li>

          <li>
            <NavLink to="/about">About us</NavLink>
          </li>

          <li style={{ color: "black" }}>
            <NavLink to="/contact">Contact </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav_btns">
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 120 },
          }}
        >
          <RiHeartLine />
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 120 },
          }}
          className="cartnum"
          onClick={handleCheck}
        >
          <RiShoppingCartLine />
          <p className="count">{cart.length}</p>
        </motion.button>
        <div className="nav_profile">
          <img src={avatar} alt="" srcset="" className="ava" />
          <p>{user ? user.username : "Guest"}</p>
        </div>
        
        {user == null ? <motion.button
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 120 },
          }}
          className="logout" onClick={()=>navigate('login')}
        >
          <RiLogoutBoxRLine style={{ marginRight: "5px" }} />
          <span>Login</span>
        </motion.button>:<motion.button
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 120 },
          }}
          className="logout" onClick={userLogout}
        >
          <RiLogoutBoxRLine style={{ marginRight: "5px" }} />
          <span>Logout</span>
        </motion.button>}
        
      </div>
    </motion.nav>
  );
};

export default Navbar;

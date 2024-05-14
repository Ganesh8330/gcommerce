import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { decrementCount, incrementCount } from "../../Redux/productSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const details = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateSubtotal = (detail) => {
    return detail.price * (detail.quantity || 0);
  };

  const calculateTotal = () => {
    return details.reduce((acc, detail) => acc + calculateSubtotal(detail), 0);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} className="table">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h2>Product Name</h2>
                  </TableCell>
                  <TableCell>
                    <h2>Product Image</h2>
                  </TableCell>
                  <TableCell>
                    <h2>Product Price</h2>
                  </TableCell>
                  <TableCell>
                    <h2>Quantity</h2>
                  </TableCell>
                  <TableCell>
                    <h2>Subtotal</h2>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {details &&
                  details.map((detail) => (
                    <TableRow
                      key={detail.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>
                        <h3>{detail.productName}</h3>
                      </TableCell>
                      <TableCell>
                        <div className="product_img">
                          <img src={detail.productImg} alt="" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p>
                          <b>${detail.price}</b>
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="quantity">
                          <button
                            onClick={() => dispatch(incrementCount(detail.id))}
                          >
                            +
                          </button>
                          <p>{detail.quantity || 0}</p>
                          <button
                            onClick={() => dispatch(decrementCount(detail.id))}
                          >
                            -
                          </button>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p>
                          <b>${calculateSubtotal(detail).toFixed(2)}</b>
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={3}>
                    <p>
                      <b>Total</b>
                    </p>
                  </TableCell>
                  <TableCell>
                    <p>
                      <b>${calculateTotal().toFixed(2)}</b>
                    </p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Paper className="Price_Details">
          <h2>Price Details</h2>
          <div className="row">
            <p>
              Price <span>({details.length} item)</span> 
            </p>
            <p>${calculateTotal().toFixed(2)}</p>
          </div>
          <div className="row">
            <p>Delivery Charges</p>
            <p style={{color:'#3bb77e',fontWeight:'500'}}>Free Delivery</p>
          </div>
          <div className="row2">
            <h3>Total Amount</h3>
            <p>${calculateTotal().toFixed(2)}</p>
          </div>
          {details.length > 0 ? <button onClick={()=>navigate('/placeorder')}>Place Order</button> :''}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;

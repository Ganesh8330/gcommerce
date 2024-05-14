import React from 'react'
import Grid from '@mui/material/Grid';
import waiter from '../../Assets/Group 57.svg'
import elipse from '../../Assets/Ellipse 9.svg'
import stars from '../../Assets/Group 7.svg'

const HomeFooter = () => {
  return (
    <div className='home-footer'>
        <Grid container spacing={2}>
            <Grid item xs={6} className='img'>
                <img src={waiter} alt="" className='waiter' />
                <div className="card4">
                    <p><b>Our reviewers</b></p>
                    <img src={elipse} alt="" />
                    <img src={elipse} alt="" />
                    <img src={elipse} alt="" />
                    <img src={elipse} alt="" />
                </div>
            </Grid>
            <Grid item xs={6} className='content'>
                <div className="texts">
                    <p>what they say</p>
                    <h1>What Our Customers Say About Us</h1>
                </div>
                <div className="footer">
                    <div className="heading">
                      <img src={elipse} alt="" className='elipse' />
                      <div className="text">
                        <h6>Theresa Jordan</h6>
                        <p>Food Enthusiast</p>
                        <div className="col">
                            <img src={stars} alt="" style={{width:'6rem'}} />
                            <p>4</p>
                        </div>
                       
                      </div>
                      
                    </div>
                    <div className="bottom">
                        
                    </div>
                    
                </div>
            </Grid>
            
        </Grid>

    </div>
  )
}

export default HomeFooter
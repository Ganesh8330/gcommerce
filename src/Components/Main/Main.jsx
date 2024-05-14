import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Loader from './Loader';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const pageLoadingTimeout = setTimeout(() => {
      setPageLoading(false);
    }, 5000);

    // Clear timeouts on component unmount
    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(pageLoadingTimeout);
    };
  }, []);

  return (
    <div>
      {pageLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          {loading ? (
            ''
          ) : (
            <>
            <div className="container">
              <Outlet />
            </div>
            {/* <Footer /> */}
            </>
          )}
         
        </div>
      )}
    </div>
  );
};

export default Main;

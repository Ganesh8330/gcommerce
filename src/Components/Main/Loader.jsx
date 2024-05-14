import React, { useEffect, useState } from 'react'

const Loader = () => {
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-loader">
    <div className="loader-text">{progress}%</div>
  </div>
  )
}

export default Loader
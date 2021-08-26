import React from 'react';
import Navbar from '../Navbar/Navbar';

const NotFound = () => {
  return (
      <div className="main-home">
        <Navbar/>
        <div className="hero-section">
          <div className="error">
            <h1 className="error-404">
              404
            </h1>
            <h1 className="error-not-found">
              Page Not Found
            </h1>
            <p className="error-p">
              This resource requested could not be found this server!
            </p>
          </div>
        </div>
      </div>
  );
};

export default NotFound;
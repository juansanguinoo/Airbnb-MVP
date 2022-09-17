import React from 'react';
import '../../assets/styles/HostStyles/MainHost.css';

const MainHost = () => {
  return (
    <main className="main__host">
      <div className="main__host__banner">
        <div className="main__host__banner__text">
          <div className="host__banner__title">
            <h1>Add your host</h1>
          </div>
          <div className="host__banner__text">
            <p>
              You're going to be a host soon! You just have to add the last
              details to your ad.
            </p>
          </div>
        </div>
        <div className="host__button__container">
          <div className="host__button">
            <button>Complete your host</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHost;

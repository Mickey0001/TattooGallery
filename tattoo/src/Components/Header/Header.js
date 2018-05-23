import React from 'react';
import Cover from '../../../src/Images/cover.jpg';

const Header = () => (
      <div className="container">
          <img src={Cover} className="img-fluid" alt="Tattoo Studio Akademija Logo"/>
          <div className="row">
            <h1>MITAR ĐINOVIĆ</h1><br/>
            <h3 >Akademski umetnik sa master studijama i profesionalni tattoo majstor. </h3><br/>
          </div><br/>
      </div>
  );
export default Header;
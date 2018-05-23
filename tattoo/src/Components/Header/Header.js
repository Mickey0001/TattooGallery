import React from 'react';
import Cover from '../../../src/Images/cover.jpg';

const Header = () => (
      <div className="row">
          <img src={Cover} className="img-fluid" alt="Tattoo Studio Akademija Logo"/>
          <div className="text-center">
            <h1>MITAR ĐINOVIĆ</h1><br/>
            <h3 className="text-center">Akademski umetnik sa master studijama i profesionalni tattoo majstor. </h3><br/>
          </div><br/>
      </div>
  );
export default Header;
import React from 'react';
import Cover from '../../../src/Images/cover.jpg';

const Header = () => (
      <div className="row">
          <img src={Cover} className="img-fluid" alt="Tattoo Studio Akademija Logo"/>
          <div className="text-center">
            <h1>MITAR ĐINOVIĆ</h1>
            <h3>Akademski umetnik sa master studijama i profesionalni tattoo majstor. Kako sam počeo, spojio crtanje i tetoviranje, opširnije govorim u nastavku teksta.</h3><br/>
          </div>
      </div>
  );
export default Header;
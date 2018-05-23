import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Text from './Components/Text/Text';
import Gallery from './Components/Gallery/Gallery';
import Tattoo from './Components/Tattoo/Tattoo';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Header/>
      <Text/>
      <Gallery/>
      <Tattoo/>
      <Footer/>
      </div>
    );
  }
}

export default App;

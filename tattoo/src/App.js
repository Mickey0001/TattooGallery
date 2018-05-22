import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Header/>
      <Gallery/>
      <Footer/>
      </div>
    );
  }
}

export default App;

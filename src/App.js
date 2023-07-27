import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent />
        <div className="map">
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


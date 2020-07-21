import React from 'react';
import Navbar  from './components/navbar/Navbar';
import './App.css';
import FHeader from './components/featured-header/fheader';
function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <FHeader />
      </div>
    </div>
  );
}

export default App;

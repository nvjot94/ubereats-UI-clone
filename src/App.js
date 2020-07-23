import React from 'react';
import Navbar  from './components/navbar/Navbar';
import './App.css';
import FHeader from './components/featured-header/fheader';
import RestaurantList from './components/restaurants/RestaurantList';
function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <FHeader />
        <RestaurantList />
      </div>
    </div>
  );
}

export default App;

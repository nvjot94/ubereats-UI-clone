import React from 'react';
import Navbar  from './components/navbar/Navbar';
import './App.css';
import FHeader from './components/featured-header/fheader';
import RestaurantList from './components/restaurants/RestaurantList';
import {AppLink} from './components/applink/AppLink';
function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <FHeader />
        <RestaurantList showAppLinks={true} title="Food Delivery in Etobicoke"  styles= {{"gridArea":"restaurants"}}/>
        <RestaurantList title="Pizza Delivery in Etobicoke"  styles= {{"gridArea":"pizzas"}}/>
      </div>
    </div>
  );
}

export default App;

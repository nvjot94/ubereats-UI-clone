import React from 'react';
import Navbar  from './components/navbar/Navbar';
import './App.css';
import FHeader from './components/featured-header/fheader';
import RestaurantList from './components/restaurants/RestaurantList';
import {BusFeatures} from './components/business-features/BusFeatures';
import { Cities } from './components/cities/cities';
import { Footer } from './components/footer/Footer';
function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <FHeader />
        <RestaurantList showAppLinks={true} title="Food Delivery in Etobicoke"  styles= {{"gridArea":"restaurants"}}/>
        <RestaurantList title="Pizza Delivery in Etobicoke"  styles= {{"gridArea":"pizzas"}}/>
        <BusFeatures />
        <Cities />
        <Footer/>
      </div>
    </div>
  );
}

export default App;

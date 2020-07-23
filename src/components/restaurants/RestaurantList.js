import React from 'react';
import './Restaurants.css';
import Restaurant from './Restaurant';
const RestaurantList = ({title}) => {
    return (
        <div className="restaurants">
        <div >
            <h2>{title}</h2>
        </div>
        <div className="horizontal-div">
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
        </div>
        </div>
    )
};

RestaurantList.defaultProps={
    title:"Food Delivery in Etobicoke"
}
export default RestaurantList;
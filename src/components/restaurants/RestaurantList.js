import React from 'react';
import './Restaurants.css';
import Restaurant from './item/Restaurant';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AppLink } from '../applink/AppLink';
const RestaurantList = ({ title, styles, showAppLinks }) => {

    return (
        <div style={styles} className="restaurants">
            <div >
                <h2>{title}</h2>
            </div>
            <Carousel showThumbs={false} >
                <div className="horizontal-div">
                    <Restaurant />
                    <Restaurant />
                    <Restaurant />
                </div>
                <div className="horizontal-div">
                    <Restaurant />
                    <Restaurant />
                    <Restaurant />
                </div>
                <div className="horizontal-div">
                    <Restaurant />
                    <Restaurant />
                    <Restaurant />
                </div>
            </Carousel>
            {showAppLinks && <AppLink />}
            <hr className="lines"></hr>
        </div>
    )
};

RestaurantList.defaultProps = {
    title: "Food Delivery in Etobicoke",
    styles: { "grid-area": "restaurants" },
    "showAppLinks": false
}
export default RestaurantList;
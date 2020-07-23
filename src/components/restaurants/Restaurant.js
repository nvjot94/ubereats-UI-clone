import React from 'react'
import './rest.css';
const Restaurant = ({data}) => {
    const {imgUrl,name,features,varities,rating}=data;
    return (
        <div className="restaurant-item">
            <div>
            <img alt="food-img" src={imgUrl}></img>
           
            </div>
            <div className="features">
                <div>
                <h3>{name}</h3>
                <ul>
              {features.map(item=><li>{item}</li>)}
                 </ul>
                </div>
           
            <div className="rating">
              {rating}    
            </div>
            </div>
            <hr></hr>
            <div>
            <ul>
             {varities.map(item=><li>{item}</li>)}
            </ul>
            </div>
            
            
        </div>
    )
};
Restaurant.defaultProps={
    data:{imgUrl:"https://d1ralsognjng37.cloudfront.net/5f449bfc-ff80-4bb9-a5c4-f29b618a22e2.jpeg",
    name:"McDonald's (Kipling)",
    features:["$.99 Delivery fee","15-25 Min","$"],
    rating:"4.3",
    varities:["Burgers","American","Fast Food"]}
};
export default Restaurant;
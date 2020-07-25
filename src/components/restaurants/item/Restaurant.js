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
               {features && <ul>
              {features.map((item)=><li key={`${item}-Math.random().toFixed(2)*100`}>{item}</li>)}
                 </ul>}
                </div>
           
            {rating &&<div className="rating">
              {rating}    
            </div>}
            </div>
            <hr></hr>
           { varities && <div>
            <ul>
             {varities.map(item=><li key={`${item}-Math.random().toFixed(2)*100`}>{item}</li>)}
            </ul>
            </div>}
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
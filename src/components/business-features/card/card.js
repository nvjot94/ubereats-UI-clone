import React from 'react'
import './card.css';
const Card = ({data}) => {
    const {imgUrl,title,purpose}=data;
    return (
        <div className="card-item">
            <div>
            <img alt="food-img" src={imgUrl}></img>
            </div>
            <div className="card-feature">
                <div>
                <h2>{title}</h2>
                <p>{purpose}</p>
                </div>
            </div>
           
          
        </div>
    )
};

export default Card;
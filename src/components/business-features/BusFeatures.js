import React from 'react'
import './style.css';
import Card from './card/card';
export const BusFeatures = ({list}) => {
    return (
        <div className="business">
        <div className="business-features">
            {list&& list.map(data=>{ return <Card data={data} />  })}
        </div>
        </div>
        
    )
};

BusFeatures.defaultProps={
    list:[{
        imgUrl:"https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cef389b486cb4827e6ba007f26ebddab.svg",
        title:"Feed your employees",
        purpose:"Create a business account"
    },{
        imgUrl:"https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7f56b34e6c253cb54a35bacf5150dde9.svg",
        title:"Your restaurant, delivered",
        purpose:"Add your restaurant"
    },
    {
        imgUrl:"https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/84d6770ca439c4b1ba2d6f53adc1d039.svg",
        title:"Deliver the Eats",
        purpose:"Sign up to driver"
    }]
}

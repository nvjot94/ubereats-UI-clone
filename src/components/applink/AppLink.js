import React from 'react'
import './AppLink.css';
export const AppLink = () => {
    return (
        <>
        <div className="app-links">
            <div>
            <img alt="uber-eat" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/0c6de4f0b3884eb89b28a29ecbc10d59.svg"></img>
            </div>
            <div>
               <p>There's more to love in the app</p> 
               <div>
                   <a href="#!">iPhone</a>
                   <a href="#!">Android</a>
               </div>
            </div>
           
        </div>
        {/* <hr className="line"></hr> */}
        </>
    )
}

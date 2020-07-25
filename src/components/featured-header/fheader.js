import React from 'react'
import './fheader.css';
const FHeader = () => {
    return (
        <div className="featured-header">
            {/* <img  className="header-img1" alt="img1" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/fcc8d7d13a6d4cc18e55898afee5a4fb.svg"></img> */}
            <div className="search-area">
                <h1>Your favorite food,<span className="mobile-only"><br></br></span> delivered with Uber</h1>
                <div>
                    <input type="text" placeholder="Enter delivery address"></input>
                    <button className="btn">Find Food</button>
                </div>

            </div>

        </div>
    )
}

export default FHeader;

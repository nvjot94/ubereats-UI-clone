import React from 'react'
import './navbar.css';
 const Navbar = () => {
    return (
        <header className="navbar">
            <div>
            <img alt="logo" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"></img>
            </div>
            <nav>
                <ul>
                 <li><a href="#!" className="signup">Create Account</a></li>
                <li><a href="#!" className="signin">Signin</a></li> 
                </ul>
            </nav>
        </header>
       
    )
}

export default Navbar;

import React from 'react'
import './footer.css';
export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="logo-div">
                    <img alt="uber-logo" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/c266ad32e5e88af804b3a1b6b60098f9.svg"></img>
                </div>
                <div className="ess-urls">
                    <div>
                        <ul>
                            <li>About Uber Eats</li>
                            <li>Read our blog</li>
                            <li>Buy gift cards</li>
                            <li>Create a business account</li>
                            <li>Add your restaurant</li>
                            <li>Sign up to deliver</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Get Help</li>
                            <li>Read FAQs</li>
                            <li>View all cities</li>
                            <li>View all countries</li>
                            <li> Restaurants near me</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="footer-line"></hr>
            <div className="last-div">
                <div>
                    <ul>
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-twitter-square" aria-hidden="true"></i></li>
                        <li><i className="fab fa-instagram" aria-hidden="true"></i></li>
                    </ul>
                </div>
                <div className="terms">
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms</li>
                        <li>Pricing</li>
                        <li>View all countries</li>
                        <li>&copy; 2020 Uber Technologies Inc.</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};




import React from 'react'
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="banner">
                <p>Don't miss the opportunity to invest in a golden future</p>
                <input type="text" placeholder="Search..." />
            </div>

            <footer>
                <div className="footer-section">
                    <div className="logo">
                        <img src="logo.png" alt="Chronicle Realty" />
                        <p>
                            Rapidiously myocardinate cross-platform intellectual capital model.
                            Appropriately create interactive infrastructures.
                        </p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i> 
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div className="contact">
                        <h3>Get In Touch</h3>
                        <p><i className="fas fa-map-marker-alt"></i> B-113, B Block, Sector 2, Noida, Uttar Pradesh</p>
                        <p><i className="fas fa-phone"></i> +91 971 833 5577
                        <br />+91 971 833 5577</p>
                        <p><i className="fas fa-envelope"></i>Chroniclerealty@gmail.<br />
                        info@Chroniclerealty.com</p>
                    </div>

                    <div className="links">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>&gt; All Properties</li>
                            <li>&gt; Our Team</li>
                            <li>&gt; Our Pricing</li>
                            <li>&gt; Our Products</li>
                        </ul>
                    </div>

                    <div className="explore">
                        <h3>Explore</h3>
                        <ul>
                            <li>&gt; All Properties</li>
                            <li>&gt; Our Team</li>
                            <li>&gt; Our Pricing</li>
                            <li>&gt; Our Products</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright 2024 Chronicle Realty, All rights reserved</p>
                       <p> <span>Terms of Service</span> | <span>Privacy Policy</span> | <span>Cookies</span></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
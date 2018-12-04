import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

const date = new Date()
const Footer = () => (
  
  <div className="footer-container">
    <div className="footer">
      <div className="container">
        <h1>Connect with us</h1>
        <Router>
          <div>
            <Link className="cta-btn" to="/">Media Specs</Link>
            <Link className="cta-btn" to="/media-specs">Media Specs</Link>
          </div>
        </Router>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <p>Snakk Media {date.getFullYear()}</p>
      </div>
    </div>
  </div>
  
)

export default Footer
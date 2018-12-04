import React from 'react'
import logo from '../img/logo.svg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MediaSpecs from './MediaSpecs'
import Home from './Home'

const Header = () => (
  <Router>
    <div>
      <div className="header">
        <div className="container">
          <Link to="/">
            <img className="logo" src={logo} alt="snakk media" />
          </Link>
          <Link to="/media-specs">Media Specs</Link>
          <Link to="/media-specs">Browse Projects</Link>
        </div>
        
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/media-specs" component={MediaSpecs} />
      
    </div>
  </Router>
)

export default Header
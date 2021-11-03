import React from 'react';
import logo from "../logo.png";

const Navbar = () => {
    return (
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">
             <a className="logo" href="#home"><img src={logo} alt="" class="img-fluid"/></a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
        </div>
      </header>
    )
}

export default Navbar

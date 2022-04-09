import React from 'react'
import "./Style.css";

const Navbar = () => {
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              CodeBucks
              <i className="fas fa-code"></i>
            </div>
            <ul className="nav-menu">
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Blog</li>
              <li className="nav-item">Contact Us</li>
            </ul>
          </div>
        </nav>
      </>
    );
}

export default Navbar

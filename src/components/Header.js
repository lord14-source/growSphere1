import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import { MdHome, MdPerson } from 'react-icons/md';


import { Link } from 'react-router-dom';
import './Header.css';
import logo from './img/logo.jpeg';

function Header() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" style={{position:'fixed',width:'100%',marginBottom:'35px',zIndex:'9999'}}>
      {/* Logo */}
      <div style={{ textAlign: 'center', marginLeft: '10px' }}>
        <img src={logo} alt="App Logo" style={{ width: '40px', height: 'auto',marginRight:'5px',borderRadius:'20%',backgroundColor:'transparent' }} />
      </div>

      {/* Brand */}
      <Link className="navbar-brand" to="/">Grow-Sphere</Link>

      {/* Toggle Button for Mobile */}
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible Content */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {/* Search Form */}
          <li className="nav-item">
            <form className="form-inline my-1 my-lg-0">
              <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
              />
              {/* Search Button with Blue Color */}
              <button className="btn custom-blue-btn" type="submit" style={{background:'#00a1d6'}}>Search</button>
              </form>
          </li>
          <li className="nav"><HiOutlineBell className='pro' style={{ color: 'white', fontSize: '20px', marginRight: '5px' ,marginTop:'4px'}}/></li>

          {/* Authentication Links */}
          <li className="nav-item nav-buttons">
            {isAuthenticated ? (
              <>
                {/* Log Out Button */}
                <button 
                  className="btn btn-link nav-link logout" 
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
                  Log Out
                </button>

                {/* Profile Link */}
                <Link className="nav-link d-flex align-items-center" to="/profile">
                  <MdPerson className='pro' style={{ color: 'white', fontSize: '20px', marginRight: '5px' }} />
                  Profile
                </Link>
              </>
            ) : (
              <div className="nav-buttons d-flex align-items-center">
                {/* Sign Up Button */}
                <button 
                  className="btn btn-link nav-link" 
                  onClick={() => loginWithRedirect()}
                >
                  <MdHome className='pro' style={{ color: 'white', fontSize: '20px', marginRight: '5px' }} />
                  Sign Up
                </button>

                {/* Login Button */}
                <Link className="login" to="/regi">
                
                  <MdPerson className='pro' style={{ color: 'white', fontSize: '20px', marginRight: '5px' }} />
                  Login
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

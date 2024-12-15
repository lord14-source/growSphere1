import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'; // Import icons from react-icons
import { NavLink } from 'react-router-dom';
import './Home.css'; // Import custom CSS

function Account() {
  

  return (
    <div className="main-layout">
    {/* Sidebar */}
    <div className="sidebar" style={{height:'100vh',marginTop:'5.6%',position:'fixed',width:'250px',overflowY:'auto',zIndex:'1',backgroundColor:'white',color:'black'}}>
        <NavLink to="/New" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
            Yield Forecast
        </NavLink>
        <NavLink to="/farmersdashboard" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
            Farmer's Under Jurisdiction
        </NavLink>
        <NavLink to="/land" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
            Land Under Jurisdiction
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
            Marketing Insights
        </NavLink>
        <NavLink to="/stakeholder" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
            Stakeholder Management
        </NavLink>
        <NavLink to="/showing" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
            Farmer's Input
        </NavLink>
        <NavLink to="/map" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
            Map
        </NavLink>
        <NavLink to="/register" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
            Account User
        </NavLink>
    </div>

    {/* Main Content Area */}
    <div className="content" style={ {    marginLeft: '250px', // Align with sidebar width
            paddingTop: '60px', // Ensure content starts below the header
            height: '100vh', // Full height
            overflowY: 'auto', // Scrollable content area
           // backgroundColor: '#f9f9f9',
            zIndex: 0, }}>
                
        <Container>
            <Row className="text-center mt-5">
                <Col>
                    <h2>Coming Soon</h2>
                </Col>
            </Row>
        </Container>
    </div>

    {/* Footer */}
    <footer className="footer">
        <Container>
            <Row className="text-center">
                <Col>
                    <p className="footer-text">© 2024 Grow-Sphere. All rights reserved.</p>
                    <p className="footer-text">
                        <NavLink to="/about">About Us</NavLink> | <NavLink to="/contact">Contact</NavLink>
                    </p>
                    <div className="social-links">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon" />
                        </a>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="social-icon" />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
</div>)
  
}

export default Account;

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'; // Import icons from react-icons
import { NavLink } from 'react-router-dom';
import './Home.css'; // Import custom CSS

function sideHome() {
    return (
        <div className="main-layout">
            {/* Sidebar */}
            <div className="sidebar">
                <NavLink to="/dashboard" className="side-link" activeClassName="active-link">Yield's Forecast</NavLink>
                <NavLink to="/farmersdashboard" className="side-link" activeClassName="active-link">Farmer's Under Jurisdiction</NavLink>
                <NavLink to="/land" className="side-link" activeClassName="active-link">Land Under Jurisdiction</NavLink>
                <NavLink to="/about" className="side-link" activeClassName="active-link">Marketing Insights</NavLink>
                <NavLink to="/stakeholder" className="side-link" activeClassName="active-link">Stakeholder Management</NavLink>
                <NavLink to="/showing" className="side-link" activeClassName="active-link">Farmer's Input</NavLink>
                <NavLink to="/map" className="side-link" activeClassName="active-link">Map</NavLink>
                {/* <NavLink to="/New" className="side-link" activeClassName="active-link">Account User</NavLink> */}
                <NavLink to="/New" className="side-link" activeClassName="active-link">Account User</NavLink>

            </div>

            {/* Main Content Area */}
            <div className="content">
                <Container>
                    <Row className="text-center mt-5">
                        <Col>
                            <h1 className="display-4">Welcome to Grow-Sphere</h1>
                            <p className="lead">Explore our features and services</p>
                            <p>
                                Farmer Tech App is an innovative mobile and web-based platform designed to empower farmers by providing them with cutting-edge tools and real-time information to improve agricultural productivity and profitability. The app offers a suite of features tailored to the needs of modern farmers, including crop management, market price updates, weather forecasts, and supply chain integration.
                            </p>
                            <p>
                                With easy-to-use interfaces, the app allows farmers to track their crop yields, access expert advice, and optimize resource usage through advanced data analytics. Farmers can also monitor soil conditions, get pest and disease alerts, and receive personalized recommendations based on their location and crop type.
                            </p>
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
        </div>
    );
}

export default sideHome;

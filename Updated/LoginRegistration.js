import React from 'react';
import './LoginRegistration.css'; // Optional: Include CSS for styling

const LoginRegistration = () => {
    // Function to handle form submission
    const handleLogin = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        alert('You are logged in!');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
};

export default LoginRegistration;

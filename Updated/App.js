// App.js

import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import './App.css';

// Adjust the path if necessary
import About from './components/About';
import Account from './components/Account';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import FarmersDashboard from './components/FarmersDashboard';
import Header from './components/Header';
import Home from './components/Home';
import Land from './components/Land';
import Login from './components/Login'; // Import Login component
import LoginRegistration from './components/LoginRegistration';
import MapComponent from './components/MapComponent';
import New from './components/New';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import SowingForm from './components/SowingForm';
import Logins from './components/logins';

function App() {
  // Using Auth0 for authentication
  const { isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  // Redirect to the "About" page after Auth0 login
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home'); // Redirect to About page if authenticated
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Account />} />
        <Route path="/showing" element={<SowingForm />} />
        <Route path="/farmersdashboard" element={<FarmersDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/land" element={<Land />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/New" element={<New />} />
        <Route path="/log" element={<Logins />} />
        <Route path="/regi" element={<LoginRegistration />} />
        
        {/* Add login route for local authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {/* Choose your authentication method */}
        
        {/* Option 1: Auth0 Authentication */}
        {/* Protect the /profile route using Auth0 */}
        <Route
          path="/profile"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />} // Redirect to login if not authenticated
        />
        
        {/* Option 2: Local Authentication */}
        {/* Protect the /dashboard route using localStorage for local authentication */}
        <Route
          path="/dashboard"
          element={localStorage.getItem('authToken') ? <Dashboard /> : <Navigate to="/login" />} // Check for auth token
        />

        <Route path="/" element={<Home />} />
      </Routes>

      {/* Logout Button for Auth0 */}
      {isAuthenticated && (
        <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
      )}
    </div>
  );
}

// Wrap App component with Auth0Provider
const Root = () => (
  <Auth0Provider
    domain="dev-0va1gvwgwfk0n27p.us.auth0.com"
    clientId="G4oOtJbNvzl9dn8c4bSdoa5EdZsxoOIk"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Router> {/* Moved Router here to allow proper routing context */ }
      <App />
    </Router>
  </Auth0Provider>
);

export default Root;

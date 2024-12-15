import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './FarmersDashboard.css';
import indianStates from './data/statesAndDistricts'; // Adjust path as needed

const FarmersDashboard = () => {
  // State for selected state and district
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  // Sample data for the chart
  const data = [
    { name: 'Orman-01', farmerCount: 400 },
    { name: 'Orman-02', farmerCount: 500 },
    { name: 'Orman-03', farmerCount: 600 },
  ];

  // Handle state selection change
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict(''); // Reset district when state changes
  };

  // Handle district selection change
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  // Find districts based on selected state
  const districts =
    indianStates.find((state) => state.name === selectedState)?.districts || [];

  return (
    <div className="main">
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

      {/* Main content */}
      <div className="dashboard-container">
        <h1 className="title" style={{marginTop:'50px'}}>Farmers Under Jurisdiction</h1>
        <div className="filters">
          <select value={selectedState} onChange={handleStateChange} className="state-dropdown">
            <option value="">Select State</option>
            {indianStates.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>

          <select value={selectedDistrict} onChange={handleDistrictChange} className="district-dropdown" disabled={!selectedState}>
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>

          <div className="field">
            <input type="text" placeholder="FPO ID" className="input" />
            <input type="text" placeholder="Crop ID" className="input" />
            <input type="text" placeholder="Farmer ID" className="input" />
          </div>
        </div>

        <button
          className="btn custom-blue-btn"
          type="submit"
          style={{
            backgroundColor: '#00a1d6',
            fontSize: '14px',
            padding: '10px 20px', // Adjust padding for proper button size
            border: 'none',
            borderRadius: '3px',
            color: '#fff',
            cursor: 'pointer',
            display: 'inline-block',
            textAlign: 'center',
            marginTop: '-60px', // Adjust margin for better spacing
          }}
        >
          Search
        </button>

        <h2 className="chart-title">Farmer Count</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 2 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="farmerCount" fill="#8B4513" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FarmersDashboard;

import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

const FilterComponent = () => {
  return (
    <div className="main-container">
      {/* Sidebar */}
      <div
        className="sidebar"
        style={{
          height: '100vh',
          marginTop: '5.6%',
          position: 'fixed',
          width: '250px',
          overflowY: 'auto',
          zIndex: '1',
          backgroundColor: '#f4f4f4',
          paddingTop: '20px',
        }}
      >
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

      {/* Main Content */}
      <div className="filter-container" style={{ marginLeft: '20px', padding: '20px', overflow: 'hidden',marginTop:'25px' }}>
        <h3>Welcome</h3>
        <select style={{ marginLeft: '-7px', marginBottom: '50px', marginTop: '10px' }}>
          <option style={{ marginRight: '4px' }}>Overview</option>
          {/* Add more grouping options here */}
        </select>

        <h4>Graph Explorer</h4>
        <p>Select a section of any graph to isolate crop and view their details</p>

        <button className="btn" style={{ background: 'blue', marginRight: '4px', marginBottom:'2px',marginLeft:'22px' }}>
          Explore
        </button>
        <button className="btn" style={{ background: 'blue', marginRight: '4px' ,marginLeft:'-1px'}}>
          Clear
        </button>
        <button className="btn" style={{ background: 'blue' }}>
          Reset
        </button>

        <h5 style={{ marginTop: '30px' }}>Group by</h5>
        <select style={{ marginLeft: '-10px' }}>
          <option>Vendor</option>
          {/* Add more grouping options here */}
        </select>

        <h6 style={{ marginTop: '15px' }}>Select below to isolate:</h6>
        <label className="custom-checkbox">
          <input type="checkbox" style={{ color: 'red', backgroundColor: 'red' }} />{' '}
          <span className="checkmark"></span> Hudson & Sons
        </label>
        <label>
          <input type="checkbox" /> Southern Cattle Ranch
        </label>
        <label>
          <input type="checkbox" /> Kayla Creek Station
        </label>
        <label>
          <input type="checkbox" /> Anthony Greenham
        </label>
        {/* Add more vendor checkboxes */}
      
      </div>
    </div>
  );
};

export default FilterComponent;

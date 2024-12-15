import axios from 'axios'; // Import axios
import React, { useEffect, useState } from 'react';
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
import './Land.css';

// List of Indian states and their districts
const statesAndDistricts = [
  {
    name: 'Andhra Pradesh',
    districts: ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', /*...*/],
  },
  {
    name: 'Arunachal Pradesh',
    districts: ['Tawang', 'West Kameng', 'East Kameng', /*...*/],
  },
  {
    name: 'Assam',
    districts: ['Baksa', 'Barpeta', 'Biswanath', /*...*/],
  },
  {
    name: 'Jharkhand',
    districts: ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', /*...*/],
  },
  // Add other states with their respective districts...
];

const Land = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/growSphere/land-data'); // Replace with your actual API URL
        setData(response.data); // Assume response.data contains your chart data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Fetch when component loads

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict(''); // Reset district when state changes
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  // Find districts for the selected state
  const districts =
    statesAndDistricts.find((state) => state.name === selectedState)?.districts ||
    [];

  return (
    <div className="main-container">
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

      {/* Main Content */}
      <div className="dashboard-container">
        <div className="search-container" style={{marginTop:'40px'}}>
          <input type="text" placeholder="Orma_00001" className="search-input" />
        </div>

        <div className="filters-container">
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="state-dropdown"
          >
            <option value="">Select State</option>
            {statesAndDistricts.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>

          <select
            value={selectedDistrict}
            onChange={handleDistrictChange}
            className="district-dropdown"
            disabled={!selectedState}
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>

          <div className="fpo">
            <input type="text" placeholder="FPO ID" className="filter-input" />
            <input type="text" placeholder="Crop ID" className="filter-input" />
            <input type="text" placeholder="Farmer ID" className="filter-input" />
          </div>
        </div>

        <button
          className="btn custom-blue-btn"
          type="submit"
          style={{
            backgroundColor: '#00a1d6',
            fontSize: '14px',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '3px',
            color: '#fff',
            cursor: 'pointer',
            display: 'inline-block',
            textAlign: 'center',
            marginTop: '-50px',
          }}
        >
          Search
        </button>

        <div className="chart-container">
          <h3>Land Under Jurisdiction</h3>
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                margin={{ top: 100, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantity" fill="#8B4513" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

       
      </div>
    </div>
  );
};

export default Land;

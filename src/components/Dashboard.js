import axios from 'axios'; // For HTTP requests
import React, { useEffect, useState } from 'react';
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
import './Dashboard.css';
import indianStates from './data/statesAndDistricts'; // Importing the list of states and districts

const Dashboard = () => {
  // State variables
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrman, setSelectedOrman] = useState('Orma_00001'); // Default selected Orman
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [fpoId, setFpoId] = useState('');
  const [cropId, setCropId] = useState('');
  const [farmerId, setFarmerId] = useState('');

  // Fetch data from backend API based on selected filters
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch data based on selected filters
        const response = await axios.get(`http://localhost:8080/growSphere/yeild`, {
          params: {
            orman: selectedOrman,
            state: selectedState,
            district: selectedDistrict,
            fpoId,
            cropId,
            farmerId,
          },
        });
        setData(response.data); // Assuming the API returns an array of objects with {name, quantity}
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedOrman, selectedState, selectedDistrict, fpoId, cropId, farmerId]);

  // Handle dropdown changes
  const handleOrmanChange = (event) => setSelectedOrman(event.target.value);
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict(''); // Reset district when state changes
  };
  const handleDistrictChange = (event) => setSelectedDistrict(event.target.value);

  // Find districts based on selected state
  const districts = indianStates.find((state) => state.name === selectedState)?.districts || [];

  return (
    <div className="dashboard-container">
      {/* Dropdown filters */}
      <div className="filters-container">
        {/* Orman Dropdown in one line */}
        <div className="orman-filter">
          
          <select value={selectedOrman} onChange={handleOrmanChange} className="search-dropdown">
            <option value="Orma_00001">Orma_00001</option>
            <option value="Orma_00002">Orma_00002</option>
            <option value="Orma_00003">Orma_00003</option>
          </select>
        </div>

        {/* Other Filters in one line */}
        <div className="other-filters">
          
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

          <input type="text" value={fpoId} onChange={(e) => setFpoId(e.target.value)} placeholder="FPO ID" />
          <input type="text" value={cropId} onChange={(e) => setCropId(e.target.value)} placeholder="Crop ID" />
          <input type="text" value={farmerId} onChange={(e) => setFarmerId(e.target.value)} placeholder="Farmer ID" />
          <button className="search-button" onClick={() => { /* Optionally handle search button click */ }}>Search</button>
        </div>
      </div>

      {/* Chart section */}
      <div className="chart-container">
        <h3>Total Quantity (MT)</h3>
        {loading ? (
          <p>Loading data...</p> // Loading indicator
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
  );
};

export default Dashboard;

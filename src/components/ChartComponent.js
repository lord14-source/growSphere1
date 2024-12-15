import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './ChartComponent.css'; // Import CSS for the chart component

// Sample data for the charts
const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
];

// ChartComponent now accepts a `chartType` prop
const ChartComponent = ({ title, chartType }) => {
  return (
    <div className="chart-container" style={{marginRight:'20px'}}>
     
      <h4>{title}</h4>

      {chartType === 'bar' ? (
        <BarChart
          width={250}
          height={180}
          data={data}
          margin={{ top: 15, right: 22, left: -25 , bottom: 15,padding: '20px',
            height: 'calc(100vh - 60px)', // Adjust for header height
            overflowY: 'auto',
            backgroundColor: '#f8f9fa',
            position: 'relative',
            zIndex: -9999,
           
          
          
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" style={{  position: 'sticky',
            zIndex: -9999,}} />
        </BarChart>
      ) : (
        <LineChart
          width={230}
          height={180}
          data={data}
          margin={{ top: -5, right: 10, left: 10, bottom: 5 ,gap:'2px'}}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      )}
    </div>
  );
};

export default ChartComponent;

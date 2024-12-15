
import React from 'react';
import ChartComponent from './ChartComponent';
import FilterComponent from './FilterComponent';
import './New.css'; // Add this line to import Dashboard-specific styles
// Import CSS for dashboard

const New = () => {
  return (
    <div className="dashboard-container">
        <div className='chart'>
      <div className="filter-sidebar">
        <FilterComponent />
      </div>
      <div className="chart-area">
        {/* Two Bar Charts */}
        <ChartComponent title="Weight vs Age" chartType="bar" />
        <ChartComponent title="Live Weights " chartType="bar" />
        
        {/* Two Line Charts */}
        <ChartComponent title="Live Weight" chartType="line" />
        <ChartComponent title="Daily Live Weight " chartType="line" />
      </div>
      </div>
    </div>
  );
};

export default New;

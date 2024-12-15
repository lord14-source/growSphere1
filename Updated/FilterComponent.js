import React from 'react';

const FilterComponent = () => {
  return (
    <div>
        <h3>Welcome</h3>
        <select style={{marginLeft:'-7px',marginBottom:'50px',marginTop:'10px'}}>
        <option style={{marginRight:'4px'}}>Overview</option>
        {/* Add more grouping options here */}
      </select>
      <h4>Graph Explorer</h4>
      <p>Select a section of any graph to isolate crop and view their details</p>

      
      <button className='btn' style={{background:'blue',marginRight:'4px'}}>Explore</button>
      <button className='btn' style={{background:'blue',marginRight:'4px'}}>Clear</button>
      <button className='btn' style={{background:'blue'}}>Reset</button>

      <h5 style={{marginTop:'30px'}}>Group by</h5>
      <select style={{marginLeft:'-10px'}}>
        <option>Vendor</option>
        {/* Add more grouping options here */}
      </select>

      <h6 style={{marginTop:'15px'}}>Select below to isolate:</h6>
      <label class="custom-checkbox"><input type="checkbox" style={{color:'red',backgroundColor:'red'}} /> <span class="checkmark"></span> Hudson & Sons</label>
      <label><input type="checkbox" /> Southern Cattle Ranch</label>
      <label><input type="checkbox" /> Kayla Creek Station</label>
      <label><input type="checkbox" /> Anthony Greenham</label>
      {/* Add more vendor checkboxes */}
    </div>
  );
};

export default FilterComponent;

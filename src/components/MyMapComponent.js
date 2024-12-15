import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MyMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="" // Replace with your API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Add markers or other components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;

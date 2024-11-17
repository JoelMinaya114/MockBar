import React from 'react';

const LocationSlider = ({ selectedIndex, locations }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', marginRight: '10px' }}>
      {locations.map((location, index) => (
        <div
          key={index}
          style={{
            margin: '10px 0',           /* Consistent vertical spacing */
            fontWeight: 'bold',         /* Maintains emphasis on text */
            cursor: selectedIndex === index ? 'pointer' : 'default', /* Pointer cursor for interactivity */
            color: selectedIndex === index ? '#1e88e5' : '#4a4a4a',  /* Brighter blue for selected, neutral gray for default */
            backgroundColor: selectedIndex === index ? '#e3f2fd' : 'transparent', /* Subtle highlight for selected state */
            borderRadius: '4px',        /* Rounded corners for smoother appearance */
            padding: '5px 10px',        /* Adds spacing for better touch targets */
            transition: 'color 0.3s ease, background-color 0.3s ease', /* Smooth transition for changes */
          }}
          
        >
          {location}
        </div>
      ))}
    </div>
  );
};

export default LocationSlider;

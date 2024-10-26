import React from 'react';

const LocationSlider = ({ selectedIndex, locations }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10px', marginRight: '20px' }}>
      {locations.map((location, index) => (
        <div
          key={index}
          style={{
            margin: '10px 0',
            fontWeight: 'bold',
            cursor: 'default',
            color: selectedIndex == index ? 'blue' : 'black',
          }}
        >
          {location}
        </div>
      ))}
    </div>
  );
};

export default LocationSlider;

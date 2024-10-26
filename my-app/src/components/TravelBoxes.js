// src/components/TravelBoxes.js
import React from 'react';

const TravelBoxes = ({ onBoxSelect }) => {
  const travelCategories = ['HOTELS', 'EVENTS', 'RESTAURANTS', 'FLIGHTS'];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '10px' // Controls spacing between the slider and the boxes
    }}>
      {/* Travel Categories Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '40px', // Reduce the gap between the boxes
        width: '20%', // Adjust width to make the boxes closer together
        margin: '0 auto',
      }}>
        {travelCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => onBoxSelect(category)}
            style={{
              width: '130px', // Adjust box size if needed
              height: '90px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black',
              cursor: 'pointer',
              transition: 'transform 0.3s',
            }}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBoxes;

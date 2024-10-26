import React from 'react';

const YearSlider = ({ selectedIndex, years }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', marginRight: '10px' }}>
      {years.map((year, index) => (
        <div
          key={index}
          style={{
            margin: '10px 0',
            fontWeight: 'bold',
            cursor: 'default',
            color: selectedIndex == index ? 'blue' : 'black',
          }}
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearSlider;


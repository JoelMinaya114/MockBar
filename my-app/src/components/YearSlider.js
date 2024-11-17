import React from 'react';

const YearSlider = ({ selectedIndex, years }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', marginRight: '10px' }}>
      {years.map((year, index) => (
        <div
          key={index}
          style={{
            margin: '10px 0',           /* Keeps spacing clean and consistent */
            fontWeight: 'bold',         /* Emphasizes selected or interactive text */
            cursor: selectedIndex === index ? 'pointer' : 'default', /* Interactive cursor when selectable */
            color: selectedIndex === index ? '#0288d1' : '#333',     /* Vibrant blue for selection, dark gray for default */
            textDecoration: selectedIndex === index ? 'underline' : 'none', /* Adds visual focus to the selected item */
            transition: 'color 0.3s ease, text-decoration 0.3s ease', /* Smooth transitions for color and decoration */
          }}
          
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearSlider;


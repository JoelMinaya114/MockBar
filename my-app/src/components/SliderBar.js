// src/components/SliderBar.js
import React from 'react';

const SliderBar = ({ onSliderChange }) => {
  const letters = ['A', 'T', 'Z'];

  const handleChange = (event) => {
    const letter = letters[event.target.value];
    onSliderChange(letter);
  };

  return (
    <div id="slider-container" style={{ margin: '50px auto', width: '50%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="range"
          min="0"
          max="2"
          defaultValue="0"
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '20px' }}
        />
        <div id="letters" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {letters.map((letter, index) => (
            <span key={index} className="letter" style={{ transform: 'translateY(10px)', fontSize: '1.5em' }}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderBar;

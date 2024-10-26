import React from 'react';

const SliderBar = ({ onSliderChange }) => {
  const letters = ['A', 'T', 'Z'];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onSliderChange(letter)}
          style={{
            padding: '10px',
            margin: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'lightgray',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default SliderBar;

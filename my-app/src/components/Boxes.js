// src/components/Boxes.js
import React from 'react';

const Boxes = ({ selectedLetter, onBoxSelect }) => {
  const boxesData = {
    A: ['Adventure'],
    T: ['Travel', 'Car', 'Beauty', 'Sport'],
    Z: ['Zen'],
  };

  const handleBoxClick = (box) => {
    onBoxSelect(box);
  };

  const filteredBoxes = boxesData[selectedLetter] || [];

  return (
    <div id="boxes-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '30px auto', gap: '10px' }}>
      {filteredBoxes.map((box, index) => (
        <div
          key={index}
          className="box"
          onClick={() => handleBoxClick(box)}
          style={{
            width: '100%',
            height: '50px',
            border: '2px solid #007bff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s',
            fontSize: '1.2em',
            marginBottom: '5px',
          }}
        >
          {box}
        </div>
      ))}
      <div className="box" style={{ width: '100%', height: '50px' }}></div> {/* Empty Box */}
      <div className="box" onClick={() => handleBoxClick('Leisure')} style={{ width: '100%', height: '50px' }}>Leisure</div>
      <div className="box" onClick={() => handleBoxClick('Music')} style={{ width: '100%', height: '50px' }}>Music</div>
      <div className="box" style={{ width: '100%', height: '50px' }}></div> {/* Empty Box */}
      <div className="box" onClick={() => handleBoxClick('Fitness')} style={{ width: '100%', height: '50px' }}>Fitness</div>
      <div className="box" onClick={() => handleBoxClick('Dining')} style={{ width: '100%', height: '50px' }}>Dining</div>
    </div>
  );
};

export default Boxes;

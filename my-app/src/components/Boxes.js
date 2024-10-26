import React from 'react';

const Boxes = ({ selectedLetter, onBoxSelect }) => {
  const categories = {
    A: ['TRAVEL', 'CAR', 'HOUSE', 'BEAUTY', 'SPORT', 'FOOD', 'TECH', 'CLOTHES', 'HEALTH', 'TOYS', 'EDUCATION', 'FURNITURE'],
    T: ['TOOLS', 'TABLET', 'TRAINING', 'TOYS', 'TICKET', 'TROPHY', 'TUTORIAL', 'TRAVEL', 'TROPICAL', 'TECH', 'TEA', 'TEXTILES'],
    Z: ['ZEBRA', 'ZOOM', 'ZEN', 'ZEST', 'ZODIAC', 'ZUCCHINI', 'ZIPPER', 'ZONE', 'ZIRCON', 'ZIGZAG', 'ZERO', 'ZOMBIE'],
  };

  const items = categories[selectedLetter] || [];

  return (
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(4, 1fr)', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '500px', margin: '0 auto' }}>
      {items.slice(0, 12).map((category, index) => (
        <div
          key={index}
          onClick={() => onBoxSelect(category)}
          style={{
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid black',
            margin: '10px',
            cursor: 'pointer',
            transition: 'transform 0.3s',
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Boxes;

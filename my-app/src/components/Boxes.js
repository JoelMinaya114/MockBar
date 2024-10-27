// import React, { useState } from 'react';

const Boxes = ({ selectedLetter, onBoxSelect }) => {
  //const [setSelectedCategory] = useState(null);
  //const [setSelectedDataPoints] = useState([]);

  const categories = {
    A: ['TRAVEL', 'CAR', 'HOUSE', 'BEAUTY', 'SPORT', 'FOOD', 'TECH', 'CLOTHES', 'HEALTH', 'TOYS', 'EDUCATION', 'FURNITURE'],
    T: ['TOOLS', 'TABLET', 'TRAINING', 'TOYS', 'TICKET', 'TROPHY', 'TUTORIAL', 'TRAVEL', 'TROPICAL', 'TECH', 'TEA', 'TEXTILES'],
    Z: ['ZEBRA', 'ZOOM', 'ZEN', 'ZEST', 'ZODIAC', 'ZUCCHINI', 'ZIPPER', 'ZONE', 'ZIRCON', 'ZIGZAG', 'ZERO', 'ZOMBIE'],
  };

  /*
  // Example data points for each category
  const dataPoints = {
    TRAVEL: ['Flight tickets', 'Hotel booking'],
    CAR: ['Car rental', 'Gas refill'],
    HOUSE: ['Mortgage payment', 'House renovation'],
    BEAUTY: ['Skincare products', 'Haircut'],
    SPORT: ['Gym membership', 'Yoga mat'],
    FOOD: ['Groceries', 'Restaurant meal'],
    TECH: ['Smartphone', 'Laptop'],
    CLOTHES: ['Jeans', 'Jacket'],
    HEALTH: ['Medicine', 'Doctor appointment'],
    TOYS: ['Action figure', 'Board game'],
    EDUCATION: ['Online course', 'Textbooks'],
    FURNITURE: ['Sofa', 'Dining table'],
    TOOLS: ['Hammer', 'Screwdriver set'],
    TABLET: ['iPad', 'Samsung Galaxy Tab'],
    TRAINING: ['Workout program', 'Jiu Jitsu class'],
    TICKET: ['Concert ticket', 'Movie ticket'],
    TROPHY: ['Sports trophy', 'Achievement award'],
    TUTORIAL: ['Cooking tutorial', 'Coding tutorial'],
    TROPICAL: ['Beach vacation', 'Tropical fruit basket'],
    TEA: ['Green tea', 'Herbal tea'],
    TEXTILES: ['Cotton fabric', 'Silk scarf'],
    ZEBRA: ['Zebra painting', 'Zebra toy'],
    ZOOM: ['Zoom subscription', 'Video conference'],
    ZEN: ['Meditation app', 'Zen garden kit'],
    ZEST: ['Lemon zest', 'Citrus zester'],
    ZODIAC: ['Zodiac sign necklace', 'Horoscope book'],
    ZUCCHINI: ['Zucchini noodles', 'Grilled zucchini'],
    ZIPPER: ['Jacket zipper', 'Zipper repair kit'],
    ZONE: ['Work zone', 'Safety zone sign'],
    ZIRCON: ['Zircon ring', 'Zircon earrings'],
    ZIGZAG: ['Zigzag pattern dress', 'Zigzag ruler'],
    ZERO: ['Zero-calorie drink', 'Zero-waste kit'],
    ZOMBIE: ['Zombie movie', 'Zombie costume'],
  };
  */

  // Retrieve items based on the selected letter
  const items = categories[selectedLetter] || [];

  /*
  // Handle click to show data points
  const handleBoxClick = (category) => {
    setSelectedCategory(category);
    setSelectedDataPoints(dataPoints[category] || ['No data available', 'No data available']);
    onBoxSelect(category); // keep original callback if necessary
  };
  */
  
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

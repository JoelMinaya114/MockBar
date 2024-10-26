import React, { useState } from 'react';
import SliderBar from './components/SliderBar';
import Boxes from './components/Boxes';
import LocationSlider from './components/LocationSlider';
import YearSlider from './components/YearSlider';
import './App.css'; // Optional: for any additional global styles

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [locationIndex, setLocationIndex] = useState(0);
  const [yearIndex, setYearIndex] = useState(0);

  const handleSliderChange = (letter) => {
    setSelectedLetter(letter);
    setSelectedTitle('');
  };

  const locations = [
    'BOSTON',
    'NYC',
    'DC',
    'MIAMI',
    'SINGAPORE',
    'PARIS',
    'ROME',
  ];

  const years = [
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
  ];

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', display: 'flex', height: '100vh' }}>
      {/* Left Sidebar for Locations */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10px' }}>
        <LocationSlider selectedIndex={locationIndex} locations={locations} />
        <input
          type="range"
          min="0"
          max={locations.length - 1}
          value={locationIndex}
          onChange={(e) => setLocationIndex(e.target.value)}
          style={{ marginTop: '20px', width: '150px' }}
        />
      </div>

      {/* Main content section */}
      <div style={{ flex: 1, textAlign: 'center', marginLeft: '20px', marginRight: '20px' }}>
        <div>
          <input
            type="range"
            min="0"
            max="2"
            defaultValue="0"
            style={{ marginBottom: '20px', width: '400px' }}
          />
        </div>
        <SliderBar onSliderChange={handleSliderChange} />
        <Boxes selectedLetter={selectedLetter} onBoxSelect={setSelectedTitle} />
        {selectedTitle && <div id="selected-title" style={{ marginTop: '20px', fontSize: '1.2em' }}>{selectedTitle}</div>}
      </div>

      {/* Right Sidebar for Years */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '10px' }}>
        <input
          type="range"
          min="0"
          max={years.length - 1}
          value={yearIndex}
          onChange={(e) => setYearIndex(e.target.value)}
          style={{ marginBottom: '20px', width: '150px' }}
        />
        <YearSlider selectedIndex={yearIndex} years={years} />
      </div>
    </div>
  );
};

export default App;

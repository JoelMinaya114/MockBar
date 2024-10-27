import React, { useState, useEffect } from 'react';
import SliderBar from './components/SliderBar';
import Boxes from './components/Boxes';
import LocationSlider from './components/LocationSlider';
import YearSlider from './components/YearSlider';
import TravelBoxes from './components/TravelBoxes';
import './App.css'; // Optional: for any additional global styles

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [locationIndex, setLocationIndex] = useState(0);
  const [yearIndex, setYearIndex] = useState(0);
  const [screen, setScreen] = useState('main');

  useEffect(() => {
    const handlePopState = (event) => {
      setScreen(event.state?.screen || 'main');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleSliderChange = (letter) => {
    setSelectedLetter(letter);
    setSelectedTitle('');
  };

  const handleBoxSelect = (category) => {
    if (category === 'TRAVEL') {
      setScreen('travel');
      window.history.pushState({ screen: 'travel' }, 'Travel');
    } else {
      setSelectedTitle(category);
    }
  };

  const handleBackButtonClick = () => {
    setScreen('main');
    window.history.pushState({ screen: 'main' }, 'Main');
  };

  const letters = ['A', 'T', 'Z'];

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
  ];

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', display: 'flex', height: '100vh', flexDirection: 'column' }}>
      {/* Top Slider for Letters */}
      <div style={{ position: 'relative', marginBottom: '20px', marginTop: '10px' }}>
        {screen === 'travel' && <h2 style={{ marginBottom: '10px' }}>Travel</h2>}
        <input
          type="range"
          min="0"
          max={letters.length - 1}
          value={letters.indexOf(selectedLetter)}
          onChange={(e) => handleSliderChange(letters[parseInt(e.target.value)])}
          style={{ width: '400px', marginLeft: '20px' }}
          step="1"
        />
      </div>

      {/* Main content section */}
      {screen === 'main' ? (
        <div style={{ display: 'flex', flex: 1 }}>
          {/* Left Sidebar for Locations with Vertical Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '10px', marginTop: '-20px' }}>
            <input
              type="range"
              min="0"
              max={locations.length - 1}
              value={locationIndex}
              onChange={(e) => setLocationIndex(parseInt(e.target.value))}
              style={{ writingMode: 'bt-lr', transform: 'rotate(90deg)', height: '300px', marginBottom: '10px' }}
              step="1"
            />
            <LocationSlider selectedIndex={locationIndex} locations={locations} />
          </div>

          {/* Main Boxes Section */}
          <div style={{ flex: 1, textAlign: 'center', marginLeft: '20px', marginRight: '20px' }}>
            <SliderBar onSliderChange={handleSliderChange} />
            <Boxes selectedLetter={selectedLetter} onBoxSelect={handleBoxSelect} />
            {selectedTitle && <div id="selected-title" style={{ marginTop: '20px', fontSize: '1.2em' }}>{selectedTitle}</div>}
          </div>

          {/* Right Sidebar for Years with Vertical Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '10px', marginTop: '-20px' }}>
            <input
              type="range"
              min="0"
              max={years.length - 1}
              value={yearIndex}
              onChange={(e) => setYearIndex(parseInt(e.target.value))}
              style={{ writingMode: 'bt-lr', transform: 'rotate(90deg)', height: '300px', marginBottom: '10px' }}
              step="1"
            />
            <YearSlider selectedIndex={yearIndex} years={years} />
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, textAlign: 'center', marginLeft: '20px', marginRight: '20px' }}>
          <button onClick={handleBackButtonClick} style={{ marginBottom: '20px', padding: '10px', fontSize: '1em' }}>Back</button>
          <TravelBoxes onBoxSelect={setSelectedTitle} />
        </div>
      )}
    </div>
  );
};

export default App;
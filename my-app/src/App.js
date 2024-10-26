// src/App.js
import React, { useState } from 'react';
import SliderBar from './components/SliderBar';
import Boxes from './components/Boxes';
import './App.css'; // Optional: for any additional global styles

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleSliderChange = (letter) => {
    setSelectedLetter(letter);
    setSelectedTitle('');
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <SliderBar onSliderChange={handleSliderChange} />
      <Boxes selectedLetter={selectedLetter} onBoxSelect={setSelectedTitle} />
      {selectedTitle && <div id="selected-title">{selectedTitle}</div>}
    </div>
  );
};

export default App;

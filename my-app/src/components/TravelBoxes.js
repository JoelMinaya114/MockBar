import React, { useState, useEffect, useMemo } from 'react';
import LocationSlider from './LocationSlider';
import YearSlider from './YearSlider';

const TravelBoxes = ({ onBoxSelect }) => {
  const [locationIndex, setLocationIndex] = useState(0);
  const [yearIndex, setYearIndex] = useState(0);

  const locations = useMemo(() => ['BOSTON', 'NYC', 'DC', 'MIAMI', 'SINGAPORE', 'PARIS', 'ROME'], []);
  const years = useMemo(() => ['2017', '2018', '2019', '2020', '2021', '2022', '2023'], []);

  const travelCategories = ['HOTELS', 'PLANES', 'RENTAL', 'EVENTS'];

  const [currentLocation, setCurrentLocation] = useState(locations[locationIndex]);
  const [currentYear, setCurrentYear] = useState(years[yearIndex]);

  useEffect(() => {
    setCurrentLocation(locations[locationIndex]);
  }, [locationIndex, locations]);

  useEffect(() => {
    setCurrentYear(years[yearIndex]);
  }, [yearIndex, years]);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Top Header */}
      <div style={{ padding: '10px', borderBottom: '2px solid black' }}>
        <h2 style={{ marginBottom: '0' }}>{currentLocation} ({currentYear})</h2>
      </div>

      {/* Main Content Section */}
      <div style={{ display: 'flex', flex: 1, position: 'relative', marginTop: '20px' }}>
        {/* Left Sidebar for Locations with Vertical Slider */}
        <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <LocationSlider selectedIndex={locationIndex} locations={locations} />
          <input
            type="range"
            min="0"
            max={locations.length - 1}
            value={locationIndex}
            onChange={(e) => setLocationIndex(parseInt(e.target.value))}
            style={{ writingMode: 'bt-lr', transform: 'rotate(90deg)', height: '300px', marginTop: '10px' }}
            step="1"
          />
        </div>

        {/* Travel Boxes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
          width: '60%',
          margin: '0 auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {travelCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => onBoxSelect(`${category} in ${currentLocation} (${currentYear})`)}
              style={{
                width: '150px',
                height: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid black',
                cursor: 'pointer',
                transition: 'transform 0.3s',
              }}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Right Sidebar for Years with Vertical Slider */}
        <div style={{ position: 'absolute', right: '0', top: '0', bottom: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <YearSlider selectedIndex={yearIndex} years={years} />
          <input
            type="range"
            min="0"
            max={years.length - 1}
            value={yearIndex}
            onChange={(e) => setYearIndex(parseInt(e.target.value))}
            style={{ writingMode: 'bt-lr', transform: 'rotate(90deg)', height: '300px', marginTop: '10px' }}
            step="1"
          />
        </div>
      </div>
    </div>
  );
};

export default TravelBoxes;

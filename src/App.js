import React, { useState } from 'react';
import './App.css';

import NameList from './NameList';

const regions = {
  '🇺🇸': 'United States',
  '🇬🇧': 'England',
  '🇩🇪': 'Germany',
  '🇪🇸': 'Spain',
  '🇫🇷': 'France'
};

const App = () => {
  const [amount, setAmount] = useState(2);
  const [region, setRegion] = useState(null);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <h1>{amount} names</h1>
      <NameList amount={amount} region={region} />
      <button onClick={() => setAmount(amount + 1)}>Get more</button>
      <div style={{ height: '20px' }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontSize: '2em'
        }}>
        {Object.keys(regions).map(regionKey => (
          <button onClick={() => setRegion(regions[regionKey])}>
            {regionKey}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;

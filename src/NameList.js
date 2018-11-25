import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://uinames.com/api/';

const fakeResponse = [
  { name: 'Jim', surname: 'Pickens', gender: 'male', region: 'USA' },
  { name: 'Simon', surname: 'Cowell', gender: 'male', region: 'UK' },
  { name: 'Thomas', surname: 'Edison', gender: 'male', region: 'USA' },
  { name: 'Vladimir', surname: 'Putin', gender: 'male', region: 'Russia' },
  { name: 'Angela', surname: 'Murkel', gender: 'female', region: 'Germany' }
];

const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

const NameList = ({ amount, region }) => {
  const [loaded, setLoaded] = useState(false);
  const [names, setNames] = useState([]);

  useEffect(
    () => {
      const regionParam = region ? `&region=${region}` : '';
      setLoaded(false);
      axios.get(`${API_URL}?amount=${amount}${regionParam}`).then(response => {
        setNames(response.data);
        setLoaded(true);
      });
    },
    [amount, region]
  );

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {names.map(name => (
        <li style={{ color: name.gender === 'male' ? 'blue' : 'hotpink' }}>
          {name.name} {name.surname}, {name.region}
        </li>
      ))}
    </ul>
  );
};

NameList.displayName = 'NameList';

export default NameList;

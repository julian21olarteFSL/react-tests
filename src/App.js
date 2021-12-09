import './App.css';
import { useState } from 'react';

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {

  const [color, setColor] = useState('MediumVioletRed')
  const [checked, setChecked] = useState(false)
  const newColor = color === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button
        style={{ backgroundColor: checked ? 'gray' : color, color: 'white' }}
        onClick={() => setColor(newColor)}
        disabled={checked}
      >
        Change to {replaceCamelWithSpaces(newColor)}
      </button>
      <input
        type="checkbox"
        defaultChecked={checked}
        id="change-button-checkbox"
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor='change-button-checkbox' >{checked ? 'Enable' : 'Disable'} button</label>
    </div>
  );
}

export default App;

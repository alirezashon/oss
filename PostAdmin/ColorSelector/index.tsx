// ColorPicker.js

import React, { useState } from 'react';
import styles from './ColorPicker.module.css';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className={styles.colorPicker}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={`${styles.colorSquare} ${selectedColor === color ? styles.selected : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        ></div>
      ))}
    </div>
  );
};

const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];

export default ColorPicker;

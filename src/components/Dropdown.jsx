// src/components/Dropdown.jsx
import React from 'react';
import '../styles/Dropdown.css';

const Dropdown = ({ label, value, setValue, options }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

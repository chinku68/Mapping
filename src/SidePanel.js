// src/SidePanel.js
import React from 'react';
import './SidePanel.css';

const SidePanel = () => {
  return (
    <div className="side-panel">
      <h2>Know Your Property</h2>
      <button>Zoom to Property</button>
      <button>Updates Details</button>
      <div>
        <label>Select Sector & Village</label>
        <select>
          <option value="sector1">Sector 1</option>
          <option value="sector2">Sector 2</option>
        </select>
      </div>
      <div>
        <label>Select Plot</label>
        <select>
          <option value="plot1">Plot 1</option>
          <option value="plot2">Plot 2</option>
        </select>
      </div>
    </div>
  );
};

export default SidePanel;

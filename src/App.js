// src/App.js
import React from 'react';
import MapComponent from './MapComponent';
import SidePanel from './SidePanel';
import './App.css';
// src/index.js or src/App.js
import 'leaflet/dist/leaflet.css';
import NavBar from './NavBar';


function App() {
  return (
    <div className="app">
      <NavBar/>
      <MapComponent />
       {/* <SidePanel />  */}
    </div>
  );
}

export default App;

// src/App.js
import React from 'react';
import Header from './Components/header';
import Sidebar from './Components/sidebar';
import Body from './Components/body';

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Body />
        <div style={{height:"auto",width:"60px",backgroundColor: "#CCE5FF"}}></div>
      </div>
    </div>
  );
}

export default App;

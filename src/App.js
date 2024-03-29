// src/App.js
import React from 'react';
import Header from './Components/header';
import Sidebar from './Components/sidebar';
import Body from './Components/home';
import "./App.css"

function App() {
  return (
    <>
     <Header />
      <div className="app-container">
        <Sidebar />
        <Body />
        <div style={{width:"60px",backgroundColor:"#deeeff"}}></div>
       </div>
    </>
  );
}

export default App;

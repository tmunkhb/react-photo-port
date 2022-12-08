import React from 'react';
import About from './component/About/index';
import Nav from './component/Nav/index';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './styles/App.css';

function App() { 
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
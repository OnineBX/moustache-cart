import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  console.log('app----' + process.env.PUBLIC_URL)
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;

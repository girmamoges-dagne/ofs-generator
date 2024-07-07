import React from 'react';
import './App.css';
import SearchForm from './components/CommandForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Command Search</h1>
        <SearchForm />
      </header>
    </div>
  );
}

export default App;

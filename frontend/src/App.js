// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import './App.css'

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch data from the TV Maze API
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div>
        <h1 className='Nav'>TV Show App</h1>
        <Routes>
  <Route path="/" element={<ShowList shows={shows} />} />
  <Route path="/show/:id" element={<ShowDetails />} />
</Routes>

      </div>
    </Router>
  );
}

export default App;

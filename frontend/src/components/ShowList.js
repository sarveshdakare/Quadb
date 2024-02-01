// src/components/ShowList.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

const ShowList = ({ shows }) => {
  return (
    <div>
      <h2>Show List</h2>
      <ul className='List'>
        {shows.map((show) => (
          <li key={show.show.id}>
            <Link to={`/show/${show.show.id}`}>
              {show.show.name} - {show.show.network && show.show.network.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;

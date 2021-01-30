import React, { useState, useEffect } from 'react';

import './SearchBox.css';

const SearchBox = ({ api, setWeather, myCurrentLocation }) => {
  const [city, setCity] = useState('');
  
  useEffect(() => {
    fetch(`${api.base}weather?q=${myCurrentLocation}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result, 'asdasfadf', city);
      });
  }, [myCurrentLocation]);

  const search = (e) => {
    e.preventDefault();

    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setCity('');
      });
  };

  return (
    <div className="SearchBox">
      <div id="cover">
        <form onSubmit={search}>
          <div className="tb">
            <div className="td">
              <input
                type="text"
                placeholder="Search..."
                required
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>
            <div className="td" id="s-cover">
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;

import React, { useState, useEffect } from 'react';
import './App.css';

import Layout from './hoc/layout/Layout';
import SearchBox from './components/searchBox/SearchBox';
import WeatherCard from './components/weatherCard/WeatherCard';
import Header from './components/header/Header';

const api = {
  key: '6ff3955d88e54852233a429423d1ecf4',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const App = () => {
  const [weather, setWeather] = useState({});

  const [myCurrentLocation, setMyCurrentLocation] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      fetch(
        `${api.base}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setMyCurrentLocation(result.name);
        });
    });
  }, []);
  
  return (
    <Layout>
      {/* {typeof weather.main !== 'undefined' ? console.log(weather[0]) : null} */}
      <Header />
      <div
        className={
          typeof weather.main !== 'undefined'
            ? weather.weather[0].main === 'Clouds'
              ? 'Main Clouds'
              : weather.weather[0].main === 'Rain'
              ? 'Main Rain'
              :  weather.weather[0].main === 'Clear' 
              ? 'Main Clear' 
              :  weather.weather[0].main === 'Snow'
              ? 'Main Snow'
              : null
            : 'Main Error'
        }
      >
        <SearchBox
          myCurrentLocation={myCurrentLocation}
          api={api}
          setWeather={setWeather}
        />
        {typeof weather.main !== 'undefined' ? (
          <WeatherCard weather={weather} api={api} />
        ) : (
          <span className="Main__not-found">Location not found...</span>
        )}
      </div>
    </Layout>
  );
};

export default App;

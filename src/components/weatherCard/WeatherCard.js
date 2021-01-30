import React from 'react';

import './WeatherCard.css'

const WeatherCard = ({ weather }) => {
  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="WeatherCard">
      <div className="WeatherCard__items">
        <div className="WeatherCard__items__location">
          {weather.name}, {weather.sys.country}
        </div>
        <div className="WeatherCard__items__date">{dateBuilder(new Date())}</div>
      </div>
      <div className="WeatherCard__items">
        <div className="WeatherCard__items__temp">{Math.round(weather.main.temp)}°c</div>
        <div className="WeatherCard__items__weather">{weather.weather[0].main}</div>
      </div>
    </div>
  );
};

export default WeatherCard;

import React from "react";
import moment from 'moment'

interface Props {
  value: any[]
}

const Weather: React.FC<Props> = ({value}) => {
  return (
    <ul>
      {
        value.map((weather: any, index) => (
          <li key={index.toString()}>
            <span>
              <b>time:</b> {moment.unix(weather.dt).format("MMMM Do, h:mm a")}, <b>temp:</b> {weather.temp} Celsus
            </span>
          </li>
        ))
      }
    </ul>
  );
};

export default Weather;
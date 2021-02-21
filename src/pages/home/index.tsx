import React, {useEffect} from "react";
import { useStore } from "effector-react";
import { $weather, fetchWeatherFx} from '../../models/weather';

import Weather from "../../components/Weather";
import Loader from '../../components/Loader/index';

import "./index.css";

export const Home: React.FC = () => {
  const isLoading = useStore(fetchWeatherFx.pending)
  const weather = useStore($weather);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords
        fetchWeatherFx({ lat: latitude, lon: longitude })
      },
      (error) => {
        console.log("error is :", error);
        alert('Please Allow GEO')
      },
    );
  }, [])
  
  useEffect(() => {
    console.log(weather);
  }, [weather])

  return (
    <main className="page page--home">
      <section className="hero">
        {
          isLoading ? <Loader /> : 
          <Weather />
        }
      </section>
    </main>
  );
};

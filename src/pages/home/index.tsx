import React, {useCallback, useEffect, useState} from "react";
import { useStore, useStoreMap } from "effector-react";
import { $weather, fetchWeatherFx} from '../../models/weather';

import Weather from "../../components/Weather";
import Loader from '../../components/Loader/index';
import ForestType from '../../components/ForestType/index';

const Home: React.FC = () => {
  const [forestType, setForestType] = useState<'hourly' | 'daily'>('hourly')
  const isLoading = useStore(fetchWeatherFx.pending)

  const weather = useStoreMap({
    store: $weather,
    keys: [forestType],
    fn: (weather, [forestType]) => {
      if (!weather) return null;

      let data: any[] = weather[forestType]
      
      if(forestType === 'daily') {
        return data.map((item: any) => ({...item, temp: item.temp.day}));
      }

      return data;
    }
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords
        fetchWeatherFx({ lat: latitude, lon: longitude, units: 'metric' })
      },
      (error) => {
        console.log("error is :", error);
        alert('Please Allow GEO')
      },
    );
  }, [])

  const handleSetType = useCallback((value) => {
    setForestType(value)
  }, [])

  return (
    <main>
      <article>
        <header>
          <ForestType 
            value={forestType}
            onChange={handleSetType}
          />
        </header>
        <section>
          {
            isLoading || !weather ? <Loader /> : 
            <Weather 
            value={weather}
            />
          }
        </section>
      </article>
    </main>
  );
};

export default Home;

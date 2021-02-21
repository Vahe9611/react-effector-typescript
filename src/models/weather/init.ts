import {fetchWeatherFx, $weather} from './'

const apiUrl = process.env.REACT_APP_WEATHER_API_URL || 'https://api.openweathermap.org/data/2.5/onecall';
const appid = process.env.REACT_APP_WEATHER_API_KEY;

fetchWeatherFx.use(async (params: any) => {
  const url = new URL(apiUrl)
  url.search = new URLSearchParams({...params, appid}).toString()
  return (await fetch(`${url}`)).json()
})

$weather.on(fetchWeatherFx.doneData, (_, weather: any) => weather)

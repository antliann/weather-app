export const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const REALTIME_ENDPOINT = '/weather';
export const FORECAST_ENDPOINT = '/forecast';

export const DEFAULT_REQUEST_PARAMS = {
  units: 'metric',
  appid: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY, // this is INSECURE and would not be used in a real-world project
};

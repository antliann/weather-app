export const URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const DEFAULT_REQUEST_PARAMS = {
  units: 'metric',
  appid: process.env.REACT_APP_OPENWEATHER_API_KEY, // this is INSECURE and would not be used in a real-world project
};

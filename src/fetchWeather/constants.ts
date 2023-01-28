import { City } from '../constants';

export const URL = 'https://api.openweathermap.org/data/3.0/onecall';

export const DEFAULT_REQUEST_PARAMS = {
  units: 'metric',
  exclude: 'current,minutely,hourly,alerts',
  appid: process.env.REACT_APP_OPENWEATHER_API_KEY, // this is INSECURE and would not be used in a real-world project
};

export const MAP_CITY_TO_COORDINATES: Record<
  City,
  [latitude: number, longitude: number]
> = {
  [City.Ottawa]: [45.4112, -75.6981],
  [City.Moscow]: [55.7522, 37.6156],
  [City.Tokyo]: [35.6895, 139.6917],
};

import { City } from '../types';

export const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';

// this is INSECURE and would not be used in a real-world project
const API_KEY = 'e998d374390eb402c069c1b6694be973';

export const DEFAULT_REQUEST_PARAMS = {
  units: 'metric',
  exclude: 'current,minutely,hourly,alerts',
  appid: API_KEY,
};

export const MAP_CITY_TO_COORDINATES: Record<
  City,
  [latitude: number, longitude: number]
> = {
  [City.Ottawa]: [45.4112, -75.6981],
  [City.Moscow]: [55.7522, 37.6156],
  [City.Tokyo]: [35.6895, 139.6917],
};

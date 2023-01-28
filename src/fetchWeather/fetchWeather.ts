import axios from 'axios';
import { type WeatherData, type City } from '../constants';
import {
  DEFAULT_REQUEST_PARAMS,
  MAP_CITY_TO_COORDINATES,
  URL,
} from './constants';
import { extractWeatherData } from './extractWeatherData';

export const fetchWeather = (city: City): Promise<WeatherData[]> => {
  const [latitude, longitude] = MAP_CITY_TO_COORDINATES[city];

  const requestParams = {
    ...DEFAULT_REQUEST_PARAMS,
    q: city,
    lat: latitude,
    lon: longitude,
  };

  return axios
    .get(URL, { params: requestParams })
    .then(response => extractWeatherData(response.data));
};

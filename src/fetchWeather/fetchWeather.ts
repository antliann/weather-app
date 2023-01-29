import axios from 'axios';
import { type WeatherData, type City } from '../constants';
import {
  DEFAULT_REQUEST_PARAMS,
  MAP_CITY_TO_COORDINATES,
  BASE_URL,
} from './constants';
import { extractWeatherData } from './extractWeatherData';
import { type WeatherResponseData } from './types';

export const fetchWeather = (city: City): Promise<WeatherData[] | null> => {
  const [latitude, longitude] = MAP_CITY_TO_COORDINATES[city];

  const requestParams = {
    ...DEFAULT_REQUEST_PARAMS,
    lat: latitude,
    lon: longitude,
  };

  return axios
    .get<WeatherResponseData>(BASE_URL, { params: requestParams })
    .then(response => extractWeatherData(response.data))
    .catch(() => null);
};

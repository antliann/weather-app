import axios from 'axios';
import { type WeatherData, type City } from '../constants';
import { DEFAULT_REQUEST_PARAMS, URL } from './constants';
import { extractWeatherData } from './extractWeatherData';

export const fetchWeather = (city: City): Promise<WeatherData[]> => {
  const requestParams = {
    ...DEFAULT_REQUEST_PARAMS,
    q: city,
  };

  return axios
    .get(URL, { params: requestParams })
    .then(response => extractWeatherData(response.data));
};

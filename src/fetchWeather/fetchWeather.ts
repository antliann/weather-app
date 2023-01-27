import { type WeatherData, type City } from '../constants';
import {
  DEFAULT_REQUEST_PARAMS,
  FORECAST_ENDPOINT,
  REALTIME_ENDPOINT,
} from './constants';
import { performRequest } from './utils';

interface FetchWeatherResult {
  realtime: Promise<WeatherData>;
  forecast: Promise<WeatherData[]>;
}

export const fetchWeather = (city: City): FetchWeatherResult => {
  const requestParams = {
    ...DEFAULT_REQUEST_PARAMS,
    q: city,
  };

  const [realtimeWeatherRequestPromise, forecastWeatherRequestPromise] = [
    REALTIME_ENDPOINT,
    FORECAST_ENDPOINT,
  ].map(endpoint => performRequest(endpoint, requestParams));

  return {
    realtime: realtimeWeatherRequestPromise.then(extractRealtimeWeatherData),
    forecast: forecastWeatherRequestPromise.then(extractForecastWeatherData),
  };
};

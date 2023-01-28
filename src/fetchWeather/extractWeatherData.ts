import type { WeatherData } from '../constants';
import type { WeatherResponseData } from './types';

const getTimezoneDay = (offsetInSeconds: number): number => {
  const timestampWithOffset = Date.now() + offsetInSeconds * 1000;
  return new Date(timestampWithOffset).getUTCDay();
};

export const extractWeatherData = (
  responseData: WeatherResponseData
): WeatherData[] => {
  const { timezone_offset: timezoneOffset } = responseData;

  const currentTimezoneDay = getTimezoneDay(timezoneOffset);

  return responseData.daily.map((record, index) => ({
    temperature: Math.round(record.temp.day),
    description: record.weather[0].main,
    icon: record.weather[0].icon,
    weekDay: currentTimezoneDay + index,
  }));
};

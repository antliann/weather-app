import { DAYS_IN_WEEK } from './constants';
import type { WeatherData } from '../constants';
import type { WeatherResponseData } from './types';

const getTimezoneWeekDay = (offsetInSeconds: number): number => {
  const shiftedTimestamp = Date.now() + offsetInSeconds * 1000;
  return new Date(shiftedTimestamp).getUTCDay();
};

export const extractWeatherData = (
  responseData: WeatherResponseData
): WeatherData[] => {
  const { timezone_offset: timezoneOffset } = responseData;

  const currentTimezoneWeekDay = getTimezoneWeekDay(timezoneOffset);

  return responseData.daily.map((record, index) => ({
    temperature: Math.round(record.temp.day),
    description: record.weather[0].main,
    icon: record.weather[0].icon,
    weekDay: (currentTimezoneWeekDay + index) % DAYS_IN_WEEK,
  }));
};

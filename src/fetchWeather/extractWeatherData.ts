import { DAYS_IN_WEEK, DAYS_TO_EXTRACT } from './constants';
import type { WeatherData } from '../constants';
import type { WeatherResponseData } from './types';

const getTimezoneWeekDay = (
  timestampInSec: number,
  offsetInSec: number
): number => {
  const shiftedTimestamp = (timestampInSec + offsetInSec) * 1000;

  return new Date(shiftedTimestamp).getUTCDay();
};

export const extractWeatherData = (
  responseData: WeatherResponseData
): WeatherData[] => {
  const currentTimezoneWeekDay = getTimezoneWeekDay(
    responseData.daily[0].dt,
    responseData.timezone_offset
  );

  const responseDataToMap = responseData.daily.slice(0, DAYS_TO_EXTRACT);

  return responseDataToMap.map((record, index) => ({
    temperature: Math.round(record.temp.day),
    description: record.weather[0].main,
    icon: record.weather[0].icon,
    weekDay: (currentTimezoneWeekDay + index) % DAYS_IN_WEEK,
  }));
};

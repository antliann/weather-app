import type { WeatherData } from '../types';
import type { WeatherResponseData } from './types';

const DAYS_IN_WEEK = 7;
const DAYS_TO_EXTRACT = 5;
const MS_IN_SECONDS = 1000;

const getTimezoneWeekDay = (
  timestampInSec: number,
  offsetInSec: number
): number => {
  const shiftedTimestamp = (timestampInSec + offsetInSec) * MS_IN_SECONDS;
  return new Date(shiftedTimestamp).getUTCDay();
};

export const extractWeatherData = (
  responseData: WeatherResponseData
): WeatherData[] => {
  const currentDayTimestampInSec = responseData.daily[0].dt;
  const timezoneOffsetInSec = responseData.timezone_offset;

  const currentTimezoneWeekDay = getTimezoneWeekDay(
    currentDayTimestampInSec,
    timezoneOffsetInSec
  );

  const weatherRecordsToMap = responseData.daily.slice(0, DAYS_TO_EXTRACT);

  return weatherRecordsToMap.map((record, index) => ({
    id: record.weather[0].id,
    temperature: Math.round(record.temp.day),
    description: record.weather[0].main,
    weekDay: (currentTimezoneWeekDay + index) % DAYS_IN_WEEK,
  }));
};

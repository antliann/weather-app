import { type WeatherData } from '../constants';

interface ForecastRecord {
  main: {
    temp: number;
  };
  weather: Array<{
    main: string;
    icon: string;
  }>;
  dt: number;
  dt_txt: string;
}

interface WeatherResponseData {
  list: ForecastRecord[];
  city: {
    timezone: number;
  };
}

const getTimezoneDate = (timestamp: number, offsetInSeconds: number) => {
  const timestampWithOffset = timestamp + offsetInSeconds * 1000;
  return new Date(timestampWithOffset).getUTCDate();
};

export const extractWeatherData = (
  data: WeatherResponseData
): WeatherData[] => {
  const closestRecord = data.list[0];

  const { timezone } = data.city;
  const currentTimezoneDate = getTimezoneDate(Date.now(), timezone);

  const nextDaysForecast = data.list.filter(record => {
    const recordDate = getTimezoneDate(record.dt * 1000, timezone);
    return (
      record.dt_txt.endsWith('12:00:00') && recordDate !== currentTimezoneDate
    );
  });

  return [closestRecord, ...nextDaysForecast].map(record => ({
    temperature: record.main.temp,
    description: record.weather[0].main,
    icon: record.weather[0].icon,
  }));
};

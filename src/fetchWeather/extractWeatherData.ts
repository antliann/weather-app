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

const getTimezoneDay = (timestamp: number, offsetInSeconds: number) => {
  const timestampWithOffset = timestamp + offsetInSeconds * 1000;
  return new Date(timestampWithOffset).getUTCDay();
};

export const extractWeatherData = (
  data: WeatherResponseData
): WeatherData[] => {
  const closestRecord = data.list[0];

  const { timezone } = data.city;
  const currentTimezoneDay = getTimezoneDay(Date.now(), timezone);

  const nextDaysForecast = data.list
    .filter(record => {
      const recordDay = getTimezoneDay(record.dt * 1000, timezone);
      return (
        recordDay !== currentTimezoneDay && record.dt_txt.endsWith('12:00:00')
      );
    })
    .slice(0, 4);

  return [closestRecord, ...nextDaysForecast].map((record, index) => ({
    temperature: Math.round(record.main.temp),
    description: record.weather[0].main,
    icon: record.weather[0].icon,
    weekDay: currentTimezoneDay + index,
  }));
};

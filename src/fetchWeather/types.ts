interface ForecastRecord {
  dt: number;
  temp: {
    day: number;
  };
  weather: Array<{
    main: string;
    icon: string;
  }>;
}

export interface WeatherResponseData {
  timezone: string;
  timezone_offset: number;
  daily: ForecastRecord[];
}

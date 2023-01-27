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

export interface WeatherResponseData {
  list: ForecastRecord[];
  city: {
    timezone: number;
  };
}

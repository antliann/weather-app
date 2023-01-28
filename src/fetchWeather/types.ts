export interface WeatherResponseData {
  timezone_offset: number;
  daily: Array<{
    dt: number;
    temp: {
      day: number;
    };
    weather: Array<{
      main: string;
      icon: string;
    }>;
  }>;
}

export enum City {
  Ottawa = 'Ottawa',
  Moscow = 'Moscow',
  Tokyo = 'Tokyo',
}

export interface WeatherData {
  id: number;
  temperature: number;
  description: string;
  weekDay: number;
}

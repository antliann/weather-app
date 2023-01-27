export enum City {
  Ottawa = 'Ottawa',
  Moscow = 'Moscow',
  Tokyo = 'Tokyo',
}

export interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
}

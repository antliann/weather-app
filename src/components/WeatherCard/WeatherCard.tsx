import React from 'react';
import { type WeatherData } from '../../constants';
import { WeatherIcon } from '../WeatherIcon';

export const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface WeatherCardProps extends WeatherData {}

const TodayWeatherCard: React.FC<WeatherCardProps> = ({
  id,
  temperature,
  description,
}) => (
  <div>
    <div>Today</div>
    <div>
      <WeatherIcon weatherId={id} />
      <div>
        <div>{temperature}°</div>
        <div>{description}</div>
      </div>
    </div>
  </div>
);

const WeekDayWeatherCard: React.FC<WeatherCardProps> = ({
  id,
  temperature,
  weekDay,
}) => (
  <div>
    <div>{WEEK_DAYS[weekDay]}</div>
    <WeatherIcon weatherId={id} small />
    <div>{temperature}°</div>
  </div>
);

export const WeatherCard = {
  Today: TodayWeatherCard,
  WeekDay: WeekDayWeatherCard,
};

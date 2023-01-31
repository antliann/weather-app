import React from 'react';
import { type WeatherData } from '../../constants';
import { WeatherIcon } from '../WeatherIcon';
import styles from './WeatherCard.less';

export const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface WeatherCardProps extends WeatherData {}

const TodayWeatherCard: React.FC<WeatherCardProps> = ({
  id,
  temperature,
  description,
}) => (
  <div className={styles.todayContainer}>
    <p>Today</p>
    <div className={styles.weatherContainer}>
      <div className={styles.weatherIcon}>
        <WeatherIcon weatherId={id} />
      </div>
      <div>
        <span className={styles.temperature}>{temperature}°</span>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const WeekDayWeatherCard: React.FC<WeatherCardProps> = ({
  id,
  temperature,
  weekDay,
}) => (
  <div className={styles.weekDayContainer}>
    <p className={styles.weekDayLabel}>{WEEK_DAYS[weekDay]}</p>
    <WeatherIcon weatherId={id} small />
    <span className={styles.temperature}>{temperature}°</span>
  </div>
);

export const WeatherCard = {
  Today: TodayWeatherCard,
  WeekDay: WeekDayWeatherCard,
};

import React from 'react';
// import { fetchWeather } from '../../fetchWeather';
import { type WeatherData, type City } from '../../constants';
import { WeatherCard } from '../WeatherCard';
import styles from './WeatherBoard.less';

interface WeatherBoardProps {
  city: City;
}

interface WeatherBoardState {
  weather: WeatherData[];
  isError: boolean;
  isLoading: boolean;
}

export class WeatherBoard extends React.Component<
  WeatherBoardProps,
  WeatherBoardState
> {
  constructor(props: WeatherBoardProps) {
    super(props);
    this.state = {
      weather: [
        {
          temperature: 19,
          description: 'Clouds',
          id: 600,
          weekDay: 6,
        },
        {
          temperature: -9,
          description: 'Snow',
          id: 300,
          weekDay: 0,
        },
        {
          temperature: -18,
          description: 'Snow',
          id: 314,
          weekDay: 1,
        },
        {
          temperature: -14,
          description: 'Clouds',
          id: 500,
          weekDay: 2,
        },
        {
          temperature: -7,
          description: 'Snow',
          id: 600,
          weekDay: 3,
        },
      ],
      isError: false,
      isLoading: true,
    };
  }

  // componentDidMount(): void {
  //   void this.updateWeather();
  // }

  // componentDidUpdate(prevProps: Readonly<WeatherBoardProps>) {
  //   if (prevProps.city !== this.props.city) {
  //     void this.updateWeather();
  //   }
  // }

  // async updateWeather() {
  //   this.setState({ isLoading: true });

  //   const weather = await fetchWeather(this.props.city);

  //   if (weather) {
  //     this.setState({ weather, isLoading: false, isError: false });
  //   } else {
  //     this.setState({ isError: true, isLoading: false });
  //   }
  // }

  render() {
    const [todayWeather, ...weekDaysWeather] = this.state.weather;

    return (
      <div className={styles.board}>
        <div className={styles.todaySection}>
          <WeatherCard.Today {...todayWeather} />
        </div>
        <div className={styles.weekDaysSection}>
          {weekDaysWeather.map(weather => (
            <div key={weather.weekDay} className={styles.weekDay}>
              <WeatherCard.WeekDay {...weather} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

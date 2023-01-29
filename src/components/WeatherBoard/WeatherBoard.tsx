import React from 'react';
import { fetchWeather } from '../../fetchWeather';
import { type WeatherData, type City } from '../../constants';
import styles from './WeatherBoard.less';

export const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
      weather: [],
      isError: false,
      isLoading: true,
    };
  }

  componentDidMount(): void {
    void this.updateWeather();
  }

  componentDidUpdate(prevProps: Readonly<WeatherBoardProps>) {
    if (prevProps.city !== this.props.city) {
      void this.updateWeather();
    }
  }

  async updateWeather() {
    this.setState({ isLoading: true });

    const weather = await fetchWeather(this.props.city);

    if (weather) {
      this.setState({ weather, isLoading: false, isError: false });
    } else {
      this.setState({ isError: true, isLoading: false });
    }
  }

  render() {
    return (
      <div className={styles.board}>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.isError && <div>Error</div>}
        {this.state.weather.map(weather => (
          <div key={weather.weekDay}>
            <div>{WEEK_DAYS[weather.weekDay]}</div>
            <div>{weather.temperature}</div>
            <div>{weather.description}</div>
            <div>{weather.icon}</div>
          </div>
        ))}
      </div>
    );
  }
}
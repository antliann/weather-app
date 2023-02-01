import React from 'react';
import { fetchWeather } from '../../fetchWeather';
import { WeatherCard } from '../WeatherCard';
import { type WeatherData, type City } from '../../constants';
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

    if (weather.length) {
      this.setState({ weather, isLoading: false, isError: false });
    } else {
      this.setState({ isError: true, isLoading: false });
    }
  }

  renderTodaySection() {
    if (this.state.isLoading) {
      return null;
    } else if (this.state.isError) {
      return <p>The error occured while fetching weather.</p>;
    } else {
      return <WeatherCard.Today {...this.state.weather[0]} />;
    }
  }

  renderWeekDaysSection() {
    if (this.state.isLoading || this.state.isError) {
      return <div className={styles.weekDay} />;
    } else {
      const weekDaysWeather = this.state.weather.slice(1);

      return weekDaysWeather.map(weather => (
        <div key={weather.weekDay} className={styles.weekDay}>
          <WeatherCard.WeekDay {...weather} />
        </div>
      ));
    }
  }

  render() {
    return (
      <div className={styles.board}>
        <div className={styles.todaySection}>{this.renderTodaySection()}</div>
        <div className={styles.weekDaysSection}>
          {this.renderWeekDaysSection()}
        </div>
      </div>
    );
  }
}

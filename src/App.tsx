import React from 'react';
import { CitiesBar, WeatherBoard } from './components';
import { City } from './constants';
import styles from './App.less';

interface AppState {
  currentCity: City;
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentCity: City.Ottawa,
    };
  }

  onSelectCity = (city: City) => {
    this.setState({ currentCity: city });
  };

  render() {
    return (
      <div className={styles.background}>
        <div className={styles.contentContainer}>
          <CitiesBar
            currentCity={this.state.currentCity}
            onSelectCity={this.onSelectCity}
          />
          <WeatherBoard city={this.state.currentCity} />
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { CitiesBar, WeatherGrid } from './components';
import { City } from './constants';

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
      <div>
        <CitiesBar
          currentCity={this.state.currentCity}
          onSelectCity={this.onSelectCity}
        />
        <WeatherGrid city={this.state.currentCity} />
      </div>
    );
  }
}

export default App;

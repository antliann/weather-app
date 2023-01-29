import React from 'react';
import { City } from '../../constants';

const CITIES = [City.Ottawa, City.Moscow, City.Tokyo];

interface CitiesBarProps {
  currentCity: City;
  onSelectCity: (city: City) => void;
}

export class CitiesBar extends React.Component<CitiesBarProps> {
  render() {
    return (
      <div>
        {CITIES.map(city => (
          <button
            key={city}
            onClick={() => {
              this.props.onSelectCity(city);
            }}
            style={{
              color: this.props.currentCity === city ? 'red' : 'black',
            }}
          >
            {city}
          </button>
        ))}
      </div>
    );
  }
}

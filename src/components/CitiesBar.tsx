import React from 'react';
import { CITIES, type City } from '../constants';

interface CitiesBarProps {
  currentCity: City;
  onSelectCity: (city: City) => void;
}

export class CitiesBar extends React.Component<CitiesBarProps> {
  render() {
    return (
      <div>
        {CITIES.map(city => {
          return (
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
          );
        })}
      </div>
    );
  }
}

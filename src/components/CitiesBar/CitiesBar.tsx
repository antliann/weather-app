import React from 'react';
import { City } from '../../types';
import styles from './CitiesBar.less';

const CITIES = [City.Ottawa, City.Moscow, City.Tokyo];

interface CitiesBarProps {
  currentCity: City;
  onSelectCity: (city: City) => void;
}

export const CitiesBar: React.FC<CitiesBarProps> = ({
  currentCity,
  onSelectCity,
}) => {
  return (
    <nav className={styles.container}>
      {CITIES.map(city => (
        <div key={city} className={styles.buttonContainer}>
          <button
            className={
              currentCity === city ? styles.selectedButton : styles.button
            }
            onClick={() => {
              onSelectCity(city);
            }}
          >
            {city}
          </button>
        </div>
      ))}
    </nav>
  );
};

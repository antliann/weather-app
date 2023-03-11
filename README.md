# Weather app

This is a simple React app to display the weather in three cities.
The app uses [OpenWeather API](https://openweathermap.org/api) to retrieve the weather data in real time.

## The app can be accessed via the link:

### [will be added soon]


## Features:
- TypeScript for code
- LESS for styling
- React class components instead of functional ones
- Pixel-perfect markup
- Weather is graphically represented using [Meteocons](https://bas.dev/work/meteocons) icons

## Project src folder structure:
```
├── components
│   ├── CitiesBar
│   │   ├── CitiesBar.less
│   │   ├── CitiesBar.tsx
│   │   └── index.ts
│   ├── WeatherBoard
│   │   ├── WeatherBoard.less
│   │   ├── WeatherBoard.tsx
│   │   └── index.ts
│   ├── WeatherCard
│   │   ├── WeatherCard.less
│   │   ├── WeatherCard.tsx
│   │   └── index.ts
│   ├── WeatherIcon
│   │   ├── WeatherIcon.less
│   │   ├── WeatherIcon.tsx
│   │   ├── getIconByWeatherId.ts
│   │   └── index.ts
│   └── index.ts
├── fetchWeather
│   ├── constants.ts
│   ├── extractWeatherData.ts
│   ├── fetchWeather.ts
│   ├── index.ts
│   └── types.ts
├── App.less
├── App.tsx
├── base.less
├── index.tsx
├── react-app-env.d.ts
└── types.ts
```

## Notes

The app requieres OpenWeather API key to be defined in env using `REACT_APP_OPENWEATHER_API_KEY` variable

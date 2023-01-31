import type React from 'react';

const ICONS_PATH = '@bybas/weather-icons/production/fill/all/';

const MAP_WEATHER_ID_TO_ICON_ID: Record<number, string> = {
  200: 'thunderstorms-rain',
  201: 'thunderstorms-overcast-rain',
  202: 'thunderstorms-extreme-rain',
  210: 'thunderstorms-day',
  211: 'thunderstorms',
  212: 'thunderstorms-overcast',
  221: 'thunderstorms-day',
  230: 'thunderstorms-rain',
  231: 'thunderstorms-overcast-rain',
  232: 'thunderstorms-extreme-rain',
  300: 'partly-cloudy-day-drizzle',
  301: 'drizzle',
  302: 'overcast-drizzle',
  310: 'partly-cloudy-day-drizzle',
  311: 'drizzle',
  312: 'overcast-drizzle',
  313: 'overcast-drizzle',
  314: 'extreme-drizzle',
  321: 'overcast-drizzle',
  500: 'partly-cloudy-day-rain',
  501: 'rain',
  502: 'overcast-rain',
  503: 'extreme-rain',
  504: 'extreme-rain',
  511: 'overcast-hail',
  520: 'overcast-day-rain',
  521: 'overcast-rain',
  522: 'extreme-rain',
  531: 'overcast-day-rain',
  600: 'snow',
  601: 'snow',
  602: 'overcast-snow',
  611: 'sleet',
  612: 'overcast-sleet',
  613: 'overcast-sleet',
  615: 'partly-cloudy-day-sleet',
  616: 'sleet',
  620: 'overcast-sleet',
  621: 'overcast-sleet',
  622: 'extreme-sleet',
  701: 'mist',
  711: 'smoke',
  721: 'haze',
  731: 'dust-wing',
  741: 'fog',
  751: 'dust',
  761: 'dust',
  762: 'dust',
  771: 'wind',
  781: 'tornado',
  800: 'clear-day',
  801: 'partly-cloudy-day',
  802: 'cloudy',
  803: 'overcast',
  804: 'extreme',
};

export type IconComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement>
>;

export const getIconByWeatherId = (id: number): Promise<IconComponent> => {
  const iconId = MAP_WEATHER_ID_TO_ICON_ID[id];

  return import(ICONS_PATH + iconId + '.svg');
};

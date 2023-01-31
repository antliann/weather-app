import React from 'react';
import { getIconByWeatherId, type IconComponent } from './getIconByWeatherId';

interface WeatherIconProps {
  weatherId: number;
  small: boolean;
}

interface WeatherIconState {
  Icon: IconComponent;
}

export class WeatherIcon extends React.Component<
  WeatherIconProps,
  WeatherIconState
> {
  async componentDidMount() {
    const Icon = await getIconByWeatherId(this.props.weatherId);
    this.setState({ Icon });
  }

  render() {
    const { Icon } = this.state;
    return <div className="weather-icon">{Icon && <Icon />}</div>;
  }
}

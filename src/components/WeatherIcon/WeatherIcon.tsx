import React from 'react';
import { getIconByWeatherId } from './getIconByWeatherId';
import styles from './WeatherIcon.less';

interface WeatherIconProps {
  weatherId: number;
  small?: boolean;
}

interface WeatherIconState {
  iconSrc: string | null;
}

export class WeatherIcon extends React.Component<
  WeatherIconProps,
  WeatherIconState
> {
  constructor(props: WeatherIconProps) {
    super(props);
    this.state = {
      iconSrc: null,
    };
  }

  async componentDidMount() {
    const iconSrc = await getIconByWeatherId(this.props.weatherId);
    this.setState({ iconSrc });
  }

  render() {
    const { iconSrc } = this.state;
    return (
      iconSrc && (
        <img
          src={iconSrc}
          className={this.props.small ? styles.smallIcon : styles.regularIcon}
          alt="Weather icon"
        />
      )
    );
  }
}

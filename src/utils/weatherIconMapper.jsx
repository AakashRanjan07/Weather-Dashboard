import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

export const weatherIconMapper = (description) => {
  switch (description) {
    case "Clear":
      return <WiDaySunny size={100} color="#fdbc3d" />;
    case "Rain":
      return <WiRain size={100} color="#007BFF" />;
    case "Clouds":
      return <WiCloudy size={100} color="#6c757d" />;
    case "Snow":
      return <WiSnow size={100} color="#00f" />;
    case "Thunderstorm":
      return <WiThunderstorm size={100} color="#8e44ad" />;
    default:
      return <WiCloudy size={100} color="#6c757d" />;
  }
};

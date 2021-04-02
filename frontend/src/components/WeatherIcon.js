import React from "react";
import {
	WiDaySunny,
	WiDayCloudy,
	WiCloud,
	WiCloudy,
	WiDayShowers,
	WiDayRain,
	WiDayThunderstorm,
	WiDaySnow,
	WiFog,
	WiNightClear,
	WiNightCloudy,
	WiNightPartlyCloudy,
	WiNightShowers,
	WiNightRain,
	WiNightThunderstorm,
	WiNightSnow,
	WiNightFog,
} from "weather-icons-react";

const WeatherIcon = ({ iconText, size }) => {
	const renderIcon = () => {
		if (size === "small") {
			switch (iconText) {
				case "01d":
					return <WiDaySunny size={24} color="#000" />;
				case "02d":
					return <WiDayCloudy size={24} color="#000" />;
				case "03d":
					return <WiCloud size={24} color="#000" />;
				case "04d":
					return <WiCloudy size={24} color="#000" />;
				case "09d":
					return <WiDayShowers size={24} color="#000" />;
				case "10d":
					return <WiDayRain size={24} color="#000" />;
				case "11d":
					return <WiDayThunderstorm size={24} color="#000" />;
				case "13d":
					return <WiDaySnow size={24} color="#000" />;
				case "50d":
					return <WiFog size={24} color="#000" />;
				default:
					return <WiDaySunny size={24} color="#000" />;
			}
		} else {
			switch (iconText) {
				case "01n":
					return <WiNightClear size={50} color="#900C3E" />;
				case "02n":
					return <WiNightPartlyCloudy size={50} color="#900C3E" />;
				case "03n":
					return <WiNightCloudy size={50} color="#900C3E" />;
				case "04n":
					return <WiNightCloudy size={50} color="#900C3E" />;
				case "09n":
					return <WiNightShowers size={50} color="#900C3E" />;
				case "10n":
					return <WiNightRain size={50} color="#900C3E" />;
				case "11n":
					return <WiNightThunderstorm size={50} color="#900C3E" />;
				case "13n":
					return <WiNightSnow size={50} color="#900C3E" />;
				case "50n":
					return <WiNightFog size={50} color="#900C3E" />;
				case "01d":
					return <WiDaySunny size={50} color="#900C3E" />;
				case "02d":
					return <WiDayCloudy size={50} color="#900C3E" />;
				case "03d":
					return <WiCloud size={50} color="#900C3E" />;
				case "04d":
					return <WiCloudy size={50} color="#900C3E" />;
				case "09d":
					return <WiDayShowers size={50} color="#900C3E" />;
				case "10d":
					return <WiDayRain size={50} color="#900C3E" />;
				case "11d":
					return <WiDayThunderstorm size={50} color="#900C3E" />;
				case "13d":
					return <WiDaySnow size={50} color="#900C3E" />;
				case "50d":
					return <WiFog size={50} color="#900C3E" />;
				default:
					return <WiNightClear size={50} color="#900C3E" />;
			}
		}
	};

	return renderIcon();
};

export default WeatherIcon;
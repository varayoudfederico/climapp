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
					return <WiDaySunny size={26} color="#7754F8" />;
				case "02d":
					return <WiDayCloudy size={26} color="#7754F8" />;
				case "03d":
					return <WiCloud size={26} color="#7754F8" />;
				case "04d":
					return <WiCloudy size={26} color="#7754F8" />;
				case "09d":
					return <WiDayShowers size={26} color="#7754F8" />;
				case "10d":
					return <WiDayRain size={26} color="#7754F8" />;
				case "11d":
					return <WiDayThunderstorm size={26} color="#7754F8" />;
				case "13d":
					return <WiDaySnow size={26} color="#7754F8" />;
				case "50d":
					return <WiFog size={26} color="#7754F8" />;
				default:
					return <WiDaySunny size={26} color="#7754F8" />;
			}
		} else {
			switch (iconText) {
				case "01n":
					return <WiNightClear size={50} color="#7754F8" />;
				case "02n":
					return <WiNightPartlyCloudy size={50} color="#7754F8" />;
				case "03n":
					return <WiNightCloudy size={50} color="#7754F8" />;
				case "04n":
					return <WiNightCloudy size={50} color="#7754F8" />;
				case "09n":
					return <WiNightShowers size={50} color="#7754F8" />;
				case "10n":
					return <WiNightRain size={50} color="#7754F8" />;
				case "11n":
					return <WiNightThunderstorm size={50} color="#7754F8" />;
				case "13n":
					return <WiNightSnow size={50} color="#7754F8" />;
				case "50n":
					return <WiNightFog size={50} color="#7754F8" />;
				case "01d":
					return <WiDaySunny size={50} color="#7754F8" />;
				case "02d":
					return <WiDayCloudy size={50} color="#7754F8" />;
				case "03d":
					return <WiCloud size={50} color="#7754F8" />;
				case "04d":
					return <WiCloudy size={50} color="#7754F8" />;
				case "09d":
					return <WiDayShowers size={50} color="#7754F8" />;
				case "10d":
					return <WiDayRain size={50} color="#7754F8" />;
				case "11d":
					return <WiDayThunderstorm size={50} color="#7754F8" />;
				case "13d":
					return <WiDaySnow size={50} color="#7754F8" />;
				case "50d":
					return <WiFog size={50} color="#7754F8" />;
				default:
					return <WiNightClear size={50} color="#7754F8" />;
			}
		}
	};

	return renderIcon();
};

export default WeatherIcon;

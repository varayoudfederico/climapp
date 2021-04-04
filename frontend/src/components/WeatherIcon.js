import React from "react";
import "../styles/weather-icons.css";

const WeatherIcon = ({ iconText, size, color }) => {
	const renderIcon = () => {
		switch (iconText) {
			case "01n":
				return <i class="wi wi-night-clear wi-fw"></i>;
			case "02n":
				return <i class="wi wi-night-partly-cloudy wi-fw"></i>;
			case "03n":
				return <i class="wi wi-night-cloudy wi-fw"></i>;
			// return <WiNightCloudy size={50} color="#7754F8" />;
			case "04n":
				return <i class="wi wi-night-cloudy wi-fw"></i>;
			// return <WiNightCloudy size={50} color="#7754F8" />;
			case "09n":
				return <i class="wi wi-night-showers wi-fw"></i>;
			// return <WiNightShowers size={50} color="#7754F8" />;
			case "10n":
				return <i class="wi wi-night-rain wi-fw"></i>;
			// return <WiNightRain size={50} color="#7754F8" />;
			case "11n":
				return <i class="wi wi-night-thunderstorm wi-fw"></i>;
			// return <WiNightThunderstorm size={50} color="#7754F8" />;
			case "13n":
				return <i class="wi wi-night-snow wi-fw"></i>;
			// return <WiNightSnow size={50} color="#7754F8" />;
			case "50n":
				return <i class="wi wi-night-fog wi-fw"></i>;
			// return <WiNightFog size={50} color="#7754F8" />;
			case "01d":
				return <i class="wi wi-day-sunny wi-fw"></i>;
			// return <WiDaySunny size={50} color="#7754F8" />;
			case "02d":
				return <i class="wi wi-day-cloudy wi-fw"></i>;
			// return <WiDayCloudy size={50} color="#7754F8" />;
			case "03d":
				return <i class="wi wi-cloud wi-fw"></i>;
			// return <WiCloud size={50} color="#7754F8" />;
			case "04d":
				return <i class="wi wi-cloudy wi-fw"></i>;
			// return <WiCloudy size={50} color="#7754F8" />;
			case "09d":
				return <i class="wi wi-day-showers wi-fw"></i>;
			// return <WiDayShowers size={50} color="#7754F8" />;
			case "10d":
				return <i class="wi wi-day-rain wi-fw"></i>;
			// return <WiDayRain size={50} color="#7754F8" />;
			case "11d":
				return <i class="wi wi-day-thunderstorm wi-fw"></i>;
			// return <WiDayThunderstorm size={50} color="#7754F8" />;
			case "13d":
				return <i class="wi wi-day-snow wi-fw"></i>;
			// return <WiDaySnow size={50} color="#7754F8" />;
			case "50d":
				return <i class="wi wi-day-fog wi-fw"></i>;
			// return <WiFog size={50} color="#7754F8" />;
			case "senstermica":
				return <i class="wi wi-thermometer wi-fw"></i>;
			case "viento":
				return <i class="wi wi-strong-wind wi-fw"></i>;
			case "humedad":
				return <i class="wi wi-humidity wi-fw"></i>;
			case "presion":
				return <i class="wi wi-barometer wi-fw"></i>;
			case "amanecer":
				return <i class="wi wi-sunrise wi-fw"></i>;
			case "atardecer":
				return <i class="wi wi-sunset wi-fw"></i>;
			default:
				return <i class="wi wi-day-clear wi-fw"></i>;
		}
	};

	return <div style={{ color: color, fontSize: size }}>{renderIcon()}</div>;
};

export default WeatherIcon;

import React from "react";
import "../styles/css/weather-icons.css";

const WeatherIcon = ({ iconText, size, color }) => {
	const renderIcon = () => {
		switch (iconText) {
			case "01n":
				return <i className="wi wi-night-clear wi-fw"></i>;
			case "02n":
				return <i className="wi wi-night-partly-cloudy wi-fw"></i>;
			case "03n":
				return <i className="wi wi-night-cloudy wi-fw"></i>;
			case "04n":
				return <i className="wi wi-night-cloudy wi-fw"></i>;
			case "09n":
				return <i className="wi wi-night-showers wi-fw"></i>;
			case "10n":
				return <i className="wi wi-night-rain wi-fw"></i>;
			case "11n":
				return <i className="wi wi-night-thunderstorm wi-fw"></i>;
			case "13n":
				return <i className="wi wi-night-snow wi-fw"></i>;
			case "50n":
				return <i className="wi wi-night-fog wi-fw"></i>;
			case "01d":
				return <i className="wi wi-day-sunny wi-fw"></i>;
			case "02d":
				return <i className="wi wi-day-cloudy wi-fw"></i>;
			case "03d":
				return <i className="wi wi-cloud wi-fw"></i>;
			case "04d":
				return <i className="wi wi-cloudy wi-fw"></i>;
			case "09d":
				return <i className="wi wi-day-showers wi-fw"></i>;
			case "10d":
				return <i className="wi wi-day-rain wi-fw"></i>;
			case "11d":
				return <i className="wi wi-day-thunderstorm wi-fw"></i>;
			case "13d":
				return <i className="wi wi-day-snow wi-fw"></i>;
			case "50d":
				return <i className="wi wi-day-fog wi-fw"></i>;
			case "senstermica":
				return <i className="wi wi-thermometer wi-fw"></i>;
			case "viento":
				return <i className="wi wi-strong-wind wi-fw"></i>;
			case "humedad":
				return <i className="wi wi-humidity wi-fw"></i>;
			case "presion":
				return <i className="wi wi-barometer wi-fw"></i>;
			case "amanecer":
				return <i className="wi wi-sunrise wi-fw"></i>;
			case "atardecer":
				return <i className="wi wi-sunset wi-fw"></i>;
			default:
				return <i className="wi wi-day-clear wi-fw"></i>;
		}
	};

	return <div style={{ color: color, fontSize: size }}>{renderIcon()}</div>;
};

export default WeatherIcon;

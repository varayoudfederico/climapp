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

export const iconTranslator = (iconText, size) => {
	console.log("Buscando icono: ", iconText);
	if (size === "small") {
		switch (iconText) {
			case "01d":
				return <WiDaySunny size={24} color="#888888" />;
			case "02d":
				return <WiDayCloudy size={24} color="#888888" />;
			case "03d":
				return <WiCloud size={24} color="#888888" />;
			case "04d":
				return <WiCloudy size={24} color="#888888" />;
			case "09d":
				return <WiDayShowers size={24} color="#888888" />;
			case "10d":
				return <WiDayRain size={24} color="#888888" />;
			case "11d":
				return <WiDayThunderstorm size={24} color="#888888" />;
			case "13d":
				return <WiDaySnow size={24} color="#888888" />;
			case "50d":
				return <WiFog size={24} color="#888888" />;
			default:
				return <WiDaySunny size={24} color="#888888" />;
		}
	} else {
		switch (iconText) {
			case "01n":
				return <WiNightClear size={36} color="#000" />;
			case "02n":
				return <WiNightPartlyCloudy size={36} color="#000" />;
			case "03n":
				return <WiNightCloudy size={36} color="#000" />;
			case "04n":
				return <WiNightCloudy size={36} color="#000" />;
			case "09n":
				return <WiNightShowers size={36} color="#000" />;
			case "10n":
				return <WiNightRain size={36} color="#000" />;
			case "11n":
				return <WiNightThunderstorm size={36} color="#000" />;
			case "13n":
				return <WiNightSnow size={36} color="#000" />;
			case "50n":
				return <WiNightFog size={36} color="#000" />;
			case "01d":
				return <WiDaySunny size={36} color="#000" />;
			case "02d":
				return <WiDayCloudy size={36} color="#000" />;
			case "03d":
				return <WiCloud size={36} color="#000" />;
			case "04d":
				return <WiCloudy size={36} color="#000" />;
			case "09d":
				return <WiDayShowers size={36} color="#000" />;
			case "10d":
				return <WiDayRain size={36} color="#000" />;
			case "11d":
				return <WiDayThunderstorm size={36} color="#000" />;
			case "13d":
				return <WiDaySnow size={36} color="#000" />;
			case "50d":
				return <WiFog size={36} color="#000" />;
			default:
				return <WiNightClear size={36} color="#000" />;
		}
	}
};

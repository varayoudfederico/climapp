import moment from "moment";
import "moment/locale/es";

export const getTemperaturaString = (temp) => {
	return Math.round(temp) + "°";
};

export const getVientoString = (wind_speed) => {
	return Math.round(wind_speed * 3.6) + " km/h";
};

export const getHumedadString = (humidity) => {
	return humidity + "%";
};

export const getPresionString = (pressure) => {
	return pressure + " hPa";
};

export const getHoraString = (time, timeOffset) => {
	return moment
		.unix(time + timeOffset)
		.utc()
		.format("HH:mm");
};

export const getFechaString = (date) => {
	return moment.unix(date).format("dddd DD");
};

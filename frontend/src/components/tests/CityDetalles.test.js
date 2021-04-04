import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import CityDetalles from "../CityDetalles";

afterEach(() => {
	cleanup();
});

test("muestra un CityDetalles correctamente", () => {
	const mockWeather = {
		description: "algo de nubes",
		feels_like: 27.68,
		humidity: 36,
		icon: "02d",
		pressure: 1011,
		sunrise: 1617531647,
		sunset: 1617573598,
		temp: 28.33,
		timezone_offset: -10800,
		wind_speed: 0.89,
	};
	render(<CityDetalles weather={mockWeather}></CityDetalles>);
	expect(screen.getByText("28*")).toBeInTheDocument();
	expect(screen.getByText("3 km/h")).toBeInTheDocument();
	expect(screen.getByText("36%")).toBeInTheDocument();
	expect(screen.getByText("1011 hPa")).toBeInTheDocument();
	expect(screen.getByText("07:20")).toBeInTheDocument();
	expect(screen.getByText("18:59")).toBeInTheDocument();
});

test("coincide con el snapshot de CityDetalles", () => {
	const mockWeather = {
		description: "algo de nubes",
		feels_like: 27.68,
		humidity: 36,
		icon: "02d",
		pressure: 1011,
		sunrise: 1617531647,
		sunset: 1617573598,
		temp: 28.33,
		timezone_offset: -10800,
		wind_speed: 0.89,
	};
	const tree = renderer
		.create(<CityDetalles weather={mockWeather}></CityDetalles>)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

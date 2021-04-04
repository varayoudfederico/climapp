import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import ForecastItem from "../ForecastItem";

afterEach(() => {
	cleanup();
});

test("muestra un ForecastItem correctamente", () => {
	const mockForecast = {
		description: "muy nuboso",
		dt: 1617552000,
		icon: "04d",
		max: 26.87,
		min: 16.06,
	};
	render(<ForecastItem dia={mockForecast}></ForecastItem>);
	expect(screen.getByText("domingo 04")).toBeInTheDocument();
	expect(screen.getByText("muy nuboso")).toBeInTheDocument();
	expect(screen.getByText("27°")).toBeInTheDocument();
	expect(screen.getByText("16°")).toBeInTheDocument();
});

test("coincide con el snapshot de ForecastItem", () => {
	const mockData = {
		description: "muy nuboso",
		dt: 1617552000,
		icon: "04d",
		max: 26.87,
		min: 16.06,
	};
	const tree = renderer
		.create(<ForecastItem dia={mockData}></ForecastItem>)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ForecastItem from "../ForecastItem";


test("renders the ForecastItem component correctly", () => {
	const mockData = {
		description: "muy nuboso",
		dt: 1617552000,
		icon: "04d",
		max: 26.87,
		min: 16.06,
	};
	render(<ForecastItem dia={mockData}></ForecastItem>);
	expect(screen.getByText("domingo 04")).toBeInTheDocument();
});

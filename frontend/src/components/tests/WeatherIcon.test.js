import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import WeatherIcon from "../WeatherIcon";

test("coincide con el snapshot de WeatherIcon", () => {
	const tree = renderer
		.create(
			<WeatherIcon iconText="01n" size="16px" color="#7754F8"></WeatherIcon>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

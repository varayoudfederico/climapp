const request = require("supertest");
const app = require("../server");

describe("testing /location", () => {
	it("should respond with a json containing the location of the user", (done) => {
		request(app)
			.get("/v1/location")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(200, done);
	});
});

const request = require("supertest");
const app = require("../src/server");

describe("testing /location", () => {
	it("should respond with a json containing the location of the user", (done) => {
		request(app)
			.get("/v1/location")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(200, done);
	});
});

describe("testing /current", () => {
	it("should respond with a json containing the weather in the location of the user", (done) => {
		request(app)
			.get("/v1/current")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(200, done);
	});

	it("respond with json containing the weather in a specific city", (done) => {
		request(app)
			.get("/v1/current/Paris")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(200, done);
	});

	it("respond with json user not found when the user does not exists", (done) => {
		request(app)
			.get("/v1/current/thiscitydoesnotexist")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(404)
			.end((err) => {
				if (err) return done(err);
				done();
			});
	});
});

describe("testing /forecast", () => {
	it("should respond with a json containing the forecast in the location of the user", (done) => {
		request(app)
			.get("/v1/forecast")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(200, done);
	});

	it("respond with json containing the forecast in a specific city", (done) => {
		request(app)
			.get("/v1/forecast/Paris")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(200, done);
	});

	it("respond with json user not found when the user does not exists", (done) => {
		request(app)
			.get("/v1/forecast/thiscitydoesnotexist")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(404)
			.end((err) => {
				if (err) return done(err);
				done();
			});
	});
});

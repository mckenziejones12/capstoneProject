const request = require("supertest");
// our main server file
const app = require("../app");
// util file to connect to test db
const db = require("./utils/db");

// Pass supertest agent for each test
const agent = request.agent(app);

// Setup stuff before any tests run
beforeAll(async () => {
  // Connect to database
  await db.connect();

  // Create a new user
  await agent
    .post("/api/users/register")
    .send({ username: "shrimp", password: "123", admin: false });

  // Login with user and it will set a jwt
  await agent.post("/api/users").send({ username: "shrimp", password: "123" });
});

// Run before each individual test
beforeEach(async () => await db.clear());

// Close database conneciton after all tests run
afterAll(async () => await db.close());

describe("POST /api/users/patients", () => {
  test("It should create a new patient", async () => {
    const body = {
      firstName: "Bob",
      lastName: "Jones",
      streetName: "asdf",
      city: "Foco",
      state: "CO",
      phoneNumber: "123-456-7890",
      d_birth: "12-21-2024",
    };

    const res = await agent.post("/api/users/patients").send(body).expect(200);

    expect(res.text).toEqual('{"message":"New patient created successfully."}');
  });
});

describe("GET /patients/:patientid", () => {
  test("It returns patients", async () => {
    const body = {
      firstName: "Bob",
      lastName: "Jones",
      streetName: "asdf",
      city: "Foco",
      state: "CO",
      phoneNumber: "123-456-7890",
      d_birth: "12-21-2024",
    };

    // Create a patient
    await agent.post("/api/users/patients").send(body);

    // Create another patient
    await agent
      .post("/api/users/patients")
      .send({ ...body, firstName: "Doug" });

    // Create another patient
    await agent.post("/api/users/patients").send({ ...body, firstName: "Tim" });

    // Then get all patients and assert patient is in there
    const res = await agent.get("/api/users/patients");

    // Assert patients fetched match our created ones
    expect(res.body.allPatients[0].firstName).toEqual("Bob");
    expect(res.body.allPatients[1].firstName).toEqual("Doug");
    expect(res.body.allPatients[2].firstName).toEqual("Tim");
  });
});

const API_URL = Cypress.env("API_URL");
const API_KEY = Cypress.env("API_KEY");

describe("Users API Tests", { env: { hideCredentials: true } }, () => {
  it("TC001 - GET /users", () => {
    cy.api({
      method: "GET",
      url: `${API_URL}/users`,
      headers: { "x-api-key": API_KEY },
    }).should(({ status, body }) => {
      const { data } = body;

      expect(status).to.eq(200);
      expect(data).to.have.length.greaterThan(0);

      data.forEach((element) => {
        expect(element).to.contain.keys(
          "id",
          "email",
          "first_name",
          "last_name",
          "avatar"
        );
      });
    });
  });
  it("TC002 - GET /users/:id", () => {
    cy.api({
      method: "GET",
      url: `${API_URL}/users/2`,
      headers: { "x-api-key": API_KEY },
    }).should(({ status, body }) => {
      const { data } = body;

      expect(status).to.eq(200);
      expect(data).to.contain.keys(
        "id",
        "email",
        "first_name",
        "last_name",
        "avatar"
      );
    });
  });
  it("TC003 - GET /users/:id with invalid ID", () => {
    cy.api({
      method: "GET",
      url: `${API_URL}/users/9999`,
      headers: { "x-api-key": API_KEY },
      failOnStatusCode: false,
    }).should(({ status, body }) => {
      expect(status).to.eq(404);
      expect(body).to.be.empty;
    });
  });
  it("TC004 - POST /users", () => {
    cy.fixture("user-data").then((data) => {
      cy.api({
        method: "POST",
        url: `${API_URL}/users`,
        headers: { "x-api-key": API_KEY },
        body: data.validNewUser,
      }).should(({ status, body }) => {
        expect(status).to.eq(201);
        expect(body).to.have.property("name", data.validNewUser.name);
        expect(body).to.have.property("job", data.validNewUser.job);
        expect(body).to.have.property("id");
        expect(body).to.have.property("createdAt");
      });
    });
  });
  it("TC005 - PUT /users/:id", () => {
    cy.fixture("user-data").then((data) => {
      cy.api({
        method: "PUT",
        url: `${API_URL}/users/2`,
        headers: { "x-api-key": API_KEY },
        body: data.validUpdateUser,
      }).should(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body).to.have.property("name", data.validUpdateUser.name);
        expect(body).to.have.property("job", data.validUpdateUser.job);
        expect(body).to.have.property("updatedAt");
      });
    });
  });
});

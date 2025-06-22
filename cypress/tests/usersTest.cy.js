const API_URL = Cypress.env("API_URL");
const API_KEY = Cypress.env("API_KEY");

describe("Users API Tests", { env: { hideCredentials: true } }, () => {
  it("TC001 - GET /users", () => {
    cy.api({
      method: "GET",
      url: `${API_URL}/users?page=1`,
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
});

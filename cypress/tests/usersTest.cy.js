import "cypress-plugin-api";

describe("Users API Tests", { env: { hideCredentials: true } }, () => {
  it("TC001 - GET /users", () => {
    cy.fixture("user-data").then((data) => {
      cy.getUsers().should(({ status, body }) => {
        const { data: users } = body;

        expect(status).to.eq(200);
        expect(users).to.have.length.greaterThan(0);

        users.forEach((user) => {
          expect(user).to.contain.keys(
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

  it("TC002 - GET /users/:id", () => {
    cy.fixture("user-data").then((data) => {
      cy.getUser(2).should(({ status, body }) => {
        const { data: user } = body;

        expect(status).to.eq(200);
        expect(user).to.contain.keys(
          "id",
          "email",
          "first_name",
          "last_name",
          "avatar"
        );
      });
    });
  });

  it("TC003 - GET /users/:id with invalid ID", () => {
    cy.getUser(9999).should(({ status, body }) => {
      expect(status).to.eq(404);
      expect(body).to.be.empty;
    });
  });

  it("TC004 - POST /users", () => {
    cy.fixture("user-data").then((data) => {
      cy.postUser(data.validNewUser).should(({ status, body }) => {
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
      cy.putUser(2, data.validUpdateUser).should(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body).to.have.property("name", data.validUpdateUser.name);
        expect(body).to.have.property("job", data.validUpdateUser.job);
        expect(body).to.have.property("updatedAt");
      });
    });
  });

  it("TC006 - DELETE /users/:id", () => {
    cy.deleteUser(2).should(({ status }) => {
      expect(status).to.eq(204);
    });
  });
});

Cypress.Commands.add("getUsers", () => {
  cy.api({
    method: "GET",
    url: `${Cypress.env("API_URL")}/users`,
    headers: { "x-api-key": Cypress.env("API_KEY") },
  });
});

Cypress.Commands.add("getUser", (userId) => {
  cy.api({
    method: "GET",
    url: `${Cypress.env("API_URL")}/users/${userId}`,
    failOnStatusCode: false,
    headers: { "x-api-key": Cypress.env("API_KEY") },
  });
});

Cypress.Commands.add("postUser", (userData) => {
  cy.api({
    method: "POST",
    url: `${Cypress.env("API_URL")}/users`,
    headers: { "x-api-key": Cypress.env("API_KEY") },
    body: userData,
  });
});

Cypress.Commands.add("putUser", (userId, userData) => {
  cy.api({
    method: "PUT",
    url: `${Cypress.env("API_URL")}/users/${userId}`,
    headers: { "x-api-key": Cypress.env("API_KEY") },
    body: userData,
  });
});

Cypress.Commands.add("deleteUser", (userId) => {
  cy.api({
    method: "DELETE",
    url: `${Cypress.env("API_URL")}/users/${userId}`,
    headers: { "x-api-key": Cypress.env("API_KEY") },
  });
});

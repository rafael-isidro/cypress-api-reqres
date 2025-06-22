const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    env: {
      API_URL: "https://reqres.in/api",
      requestMode: true
    },
    setupNodeEvents(on, config) { }
  }
});

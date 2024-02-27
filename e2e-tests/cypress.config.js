const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1000,
  video: true,
  projectId: "bh5j1d",
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  env: {
    apiUrl: "http://localhost:3000",
    urls: {
      article: "/article",
      apiArticles: "/api/articles",
      settings: "/settings",
      apiUser: "/api/user",
      apiTags: "/api/tags",
      apiLogin: "/api/users/login",
    },
  },
  reporter: "node_modules/mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-report",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:4100",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
  watchForFileChanges: false,
});

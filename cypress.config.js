const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    MAILSLURP_API_KEY:
      "5b429b4813f6b6b512f00a86c2cde4d28d1c64190da42895c4ec52d0f6b2aefd",
  },
  e2e: {
    defaultCommandTimeout: 40000,
    responseTimeout: 40000,
    requestTimeout: 40000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

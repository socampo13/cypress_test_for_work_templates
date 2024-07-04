const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    //baseUrl: 'https://localhost:8080',
    // implement node event listeners here
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});

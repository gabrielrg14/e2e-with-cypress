const { defineConfig } = require("cypress")

module.exports = defineConfig({
	projectId: "fz1j5k",
	e2e: {
		baseUrl: "https://notes-serverless-app.com",
		requestTimeout: 10000,
		env: {
			viewportWidthBreakpoint: 768
		},
		setupNodeEvents(on, config) {
			require("@cypress/grep/src/plugin")(config)
			return config
		},
	},
	chromeWebSecurity: false
})

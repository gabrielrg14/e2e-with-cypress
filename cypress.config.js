const { defineConfig } = require("cypress")

module.exports = defineConfig({
	chromeWebSecurity: false,
	e2e: {
		baseUrl: "https://notes-serverless-app.com",
		requestTimeout: 10000,
		env: {
			viewportWidthBreakpoint: 768
		}
	}
})

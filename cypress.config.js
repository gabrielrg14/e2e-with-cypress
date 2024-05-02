const { defineConfig } = require("cypress")

module.exports = defineConfig({
	projectId: "sxyvst",
	e2e: {
		baseUrl: "https://notes-serverless-app.com",
		requestTimeout: 10000,
		env: {
			viewportWidthBreakpoint: 768
		}
	},
	chromeWebSecurity: false
})

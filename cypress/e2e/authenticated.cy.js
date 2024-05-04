import { faker } from "@faker-js/faker/locale/en"

describe("Scenarios where authentication is a pre-condition", () => {
	beforeEach(() => {
		cy.intercept("GET", "**/notes").as("getNotes")
		cy.sessionLogin()
	})

	it("CRUDs a note", () => {
		const noteDescription = faker.lorem.words(4)
		const updatedNoteDescription = faker.lorem.words(4)
		const filePath = "cypress/fixtures/example.json"

		cy.createNote(noteDescription)
		cy.wait("@getNotes")

		cy.editNote(noteDescription, updatedNoteDescription, filePath)
		cy.wait("@getNotes")

		cy.deleteNote(updatedNoteDescription)
		cy.wait("@getNotes")
	})

	it("successfully submits the settings form", () => {
		cy.intercept("POST", "**/billing").as("paymentRequest")

		cy.fillSettingsFormAndSubmit()

		cy.wait("@getNotes")
		cy.wait("@paymentRequest")
			.its("state")
			.should("be.equal", "Complete")
	})

	it("logs out", { tags: "@desktop-and-mobile" }, () => {
		cy.visit("/")
		cy.wait(2000)

		cy.contains(".nav a", "Logout").click()

		cy.get("#email").should("be.visible")
	})
})

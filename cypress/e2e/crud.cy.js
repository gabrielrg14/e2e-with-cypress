import { faker } from "@faker-js/faker/locale/en"

describe("CRUD", () => {
	it("CRUDs a note", () => {
		const noteDescription = faker.lorem.words(4)
		const updatedNoteDescription = faker.lorem.words(4)
		const filePath = "cypress/fixtures/example.json"

		cy.intercept("GET", "**/notes").as("getNotes")
		cy.sessionLogin()

		cy.createNote(noteDescription)
		cy.wait("@getNotes")

		cy.editNote(noteDescription, updatedNoteDescription, filePath)
		cy.wait("@getNotes")

		cy.deleteNote(updatedNoteDescription)
		cy.wait("@getNotes")
	})
})

describe('Note app', function () {
	beforeEach(function () {
		cy.visit('http://localhost:5173')
	})

	it('front page can be opened', function () {
		cy.contains('Notes')
		cy.contains('HTML is easy')
	})

	it('login form can be opened', function () {
		cy.contains('login').click()
		cy.get('#username').type('admin')
		cy.get('#password').type('1234')
		cy.get('#login-button').click()

		cy.contains('shrish logged-in')
	})
})

describe('Note app', function () {
	beforeEach(function () {
		cy.request('POST', 'http://localhost:3001/api/testing/reset')
		const user = {
			name: 'shrish',
			username: 'admin',
			password: '1234',
		}
		cy.request('POST', 'http://localhost:3001/api/users/', user)
		cy.visit('http://localhost:5173')
	})

	// it('front page can be opened', function () {
	// 	cy.contains('Notes')
	// 	cy.contains('HTML is easy')
	// })

	it('login form can be opened', function () {
		cy.contains('login').click()
		cy.get('#username').type('admin')
		cy.get('#password').type('1234')
		cy.get('#login-button').click()

		cy.contains('shrish logged-in')
	})

	describe('when logged in', function () {
		beforeEach(function () {
			cy.contains('login').click()
			cy.get('input:first').type('admin')
			cy.get('input:last').type('1234')
			cy.get('#login-button').click()
		})

		it('a new note can be created', function () {
			cy.contains('new note').click()
			cy.get('input').type('a note created by cypress')
			cy.contains('save').click()
			cy.contains('a note created by cypress')
		})

		describe('and a note exists', function () {
			beforeEach(function () {
				cy.contains('new note').click()
				cy.get('input').type('another note cypress')
				cy.contains('save').click()
			})

			it('it can be made not important', function () {
				cy.contains('another note cypress').contains('make not important').click()

				cy.contains('another note cypress').contains('make important')
			})
		})
	})
})

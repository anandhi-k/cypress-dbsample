describe('Demo Submit Form', () => {
	it('Should fill the form and submit', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/')
		cy.get('#developer-name').type('testuser')
		cy.get('#tried-test-cafe').click()
		cy.get('#submit-button').click()
		cy.get('[data-testid=thank-you-header]').contains('Thank you')
		//cy.get('#article-header').contains('Thank yo')
	})
})

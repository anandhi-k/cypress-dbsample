/// <reference types='cypress' />


describe('Search Item', () => {
    it('Check number of items', () => {
        cy.visit('https://essentialsdemoecommerce.site')
        cy.get('#menu-item-45 > .menu-link > .menu-text').click()
        cy.get('.search-field').type('shoes')
        cy.get('.woocommerce-product-search > button').click()
        cy.get('.astra-shop-thumbnail-wrap').should('have.length',5)
        cy.get('.astra-shop-thumbnail-wrap').find('.onsale').should('have.length', 3)

    })
})
/// <reference types="Cypress" />

describe('Second test suite', function() {
    it('Second test case', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productsLocator')

        cy.get('.products').find('.product').each(($el, index, $list) => {
            let itemName = $el.find('h4.product-name').text()
            if(itemName.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        cy.get('select').select('Hungary')
        cy.get('.chkAgree').check()
        cy.get('button').click()
        cy.contains('Thank you')
    })
})
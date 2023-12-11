/// <reference types="Cypress" />

describe('My First suite', function() {
    it('First test case', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')

        //visible, non-visible elements
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)

        //parent-child chaning
        cy.get('.products').as('productsLocator') //assigning an alias for a locator to refrence it
        cy.get('@productsLocator').find('.product').should('have.length', 4)
        cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click() //will click on the third item

        //selecting a specific element from an array
        cy.get('.products').find('.product').each(($el, index, $list) => {
            let itemName = $el.find('h4.product-name').text()
            if(itemName.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.brand').should('have.text', 'GREENKART')

        //command yield 
        cy.get('.brand').then((logo) =>{
            cy.log(logo.text())
        })
    })
})
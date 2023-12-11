/// <reference types="Cypress" />

describe('Third test suite', function() {
    it('Third test case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //static dropdowns
        cy.get('select').select('Option1').should('have.value','option1')

        //dynamic dropdowns
        cy.get('#autocomplete').type('united')
        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {
            if($el.text()==='United States (USA)'){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'United States (USA)')

        //visible-invisible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio button
        cy.get('input[value="radio2"]').check().should('be.checked')
    })
})
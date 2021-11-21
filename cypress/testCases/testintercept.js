/// <reference types="cypress" />

describe('Test', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/api/tags', {fixture:'tags.json'});
        cy.visit('http://localhost:4200')
})

it.only('Stub Articles', () => {
    cy.contains('a', 'Sign in').click();
    cy.get('[placeholder="Email"]').type('origin@gmail.com');
    cy.get('[placeholder="Password"]').type('1qazZAQ!');
    cy.intercept('POST', '**/api/users/login').as('login');
    cy.contains('button', 'Sign in').click({force:true});
    cy.wait('@login');

    cy.intercept('GET', '**/api/articles**', {fixture:'articles.json'});
    cy.contains('a', 'Global Feed').click();
    
    cy.intercept('POST', '**/favorite').as('favorite');
    cy.get('.btn.btn-sm.btn-outline-primary').eq(0).click();
    cy.wait('@favorite');
    cy.get('.btn.btn-sm.btn-outline-primary').eq(0).invoke('css', 'background-color').then(color => {
            expect(color).to.contain('rgb(92, 184, 92)')
    })

    cy.intercept('GET', '**/Article-01-95').as('count');
    cy.get('.btn.btn-sm.btn-outline-primary').eq(0).should('contain', 1);

})

})

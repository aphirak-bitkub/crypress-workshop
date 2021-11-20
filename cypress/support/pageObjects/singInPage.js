/// <reference types="cypress" />

export class SinginPage {
    login(email,password){
        cy.get('[placeholder="Email"]').clear().type(email);
        cy.get('[placeholder="Password"]').clear().type(password);
        cy.intercept('POST', '**/api/users/login').as('login');
        cy.contains('button' , 'Sign in').click();
        cy.wait('@login')
    }

}

export const onSinginPage = new SinginPage;

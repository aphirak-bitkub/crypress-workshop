/// <reference types="cypress" />

export class SinginPage {
    login(email,password){
        cy.get('[placeholder="Email"]').clear().type(email);
        cy.get('[placeholder="Password"]').clear().type(password);
        cy.intercept('POST', '**/api/users/login').as('login');
        cy.contains('button' , 'Sign in').click();
        cy.wait('@login')
    }

    filEmail(email){
        cy.get('[placeholder="Email"]').clear().type(email);
    }

    filPassword(password){
        cy.get('[placeholder="Password"]').clear().type(password);
    }

    clickLogin(password){
        cy.intercept('POST', '**/api/users/login').as('login');
        cy.contains('button' , 'Sign in').click();
        cy.wait('@login')
    }

    verifyLogin(password){
        
    }


}



export const onSinginPage = new SinginPage;

/// <reference types="cypress" />

export class SignInPage {

    fillpassword(password){
        cy.get('[placeholder="Password"]')
            .clear()
            .type(password)
            .should('have.value', password)
    }

    fillemail(email){
        cy.get('[placeholder="Email"]')
            .clear()
            .type(email)
            .should('have.value', email)
    }

    clickSigninButton(){
        cy.contains('button', 'Sign in').click();
    }

}

export const onSignInPage = new SignInPage;
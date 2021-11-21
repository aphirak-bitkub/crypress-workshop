/// <reference types="cypress" />

export class SignupPage {
    fillusername(username){
        cy.get('[placeholder="Username"]')
            .clear()
            .type(username)
            .should('have.value', username)
    }

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

    clickSignupButton(){
        cy.contains('button', 'Sign up').click();
    }

}

export const onSignupPage = new SignupPage;
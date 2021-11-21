/// <reference types="cypress" />


export class TopmenuPage {
    clickHomeLink(){

    }

    clickSignInLink(){

    }

    clickSignUpLink(){
        cy.contains('a', 'Sign up').click();

    }

    clickSignInLink(){
        cy.contains('a', 'Sign in').click();

    }
}

export const onTopMenuPage = new TopmenuPage
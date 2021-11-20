/// <reference types="cypress" />

import { onTopMenuPage } from "./topMenuPage";

export class SingupPage {
    filUsername(username){
        cy.get('[placeholder="Username"]')
        .clear()
        .type(username);
    }

    filEmail(email){
        cy.get('[placeholder="Email"]')
        .clear()
        .type(email);
    }

    filPassword(password){
        cy.get('[placeholder="Password"]')
        .clear()
        .type(password);
    }

    clickSingUpButton(){
        cy.intercept('POST', '**/api/users').as('signUp');
        cy.contains('button' , 'Sign up').click();
        cy.wait('@signUp')
    }
    

}


export const onSingupPage = new SingupPage;
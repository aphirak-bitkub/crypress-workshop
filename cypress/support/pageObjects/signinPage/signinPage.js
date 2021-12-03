/// <reference types="cypress" />

export class SinginPage {
    filEmail(email){
    cy.get('[placeholder="Email Address"]').clear().type(email);
   }

   filPassword(password){
    cy.get('[placeholder="Password"]').clear().type(password);

   }
    clickSignInbButton(){
    cy.get('button.a-chevron-circle-right').click();
    
   }
}

export const onSinginPage = new SinginPage;
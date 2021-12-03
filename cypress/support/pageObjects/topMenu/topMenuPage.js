/// <reference types="cypress" />

export class TopMenuPage {
    clickSignInbButton(){
    cy.get('[href="/login"]').eq(0).click();
   }

   clickSignUpbButton(){
    cy.get('[href="/signup"]').should('be.enabled').click();
}
}


export const onTopMenuPage = new TopMenuPage;
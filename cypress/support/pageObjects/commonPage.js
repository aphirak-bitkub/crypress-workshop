/// <reference types="cypress" />

export class CommonPage {

    VerifyRedMsgError(expectMsgError){
        cy.get('.error-messages').should('contain', expectMsgError);
    }

}



export const onCommonPage = new CommonPage;


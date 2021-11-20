/// <reference types="cypress" />

 export class TopMenuPage {
     clickHomeLink(){
        cy.contains('a' , 'Home').click();
    }
     clickSingInLink(){
        cy.contains('a' , 'Sign in').click();
         
    }
    clickSingUpLink(){
        cy.contains('a' , 'Sign up').click();
    }

    clickSettingsLink(){
        cy.contains('a' , 'Settings').click();
    }

    clickNewArticleLink(){
        cy.contains('a' , 'New Artic').click();
        cy.wait(1000);
    }

}

export const onTopMenuPage = new TopMenuPage;




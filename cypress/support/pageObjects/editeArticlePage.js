/// <reference types="cypress" />

export class EditArticle {
    verifyBannerarticleTitle(articleTitle){
        cy.get('.article-page')
        .find('h1')
        .should('contain', articleTitle)
    }

    verifyDescription(description){
        cy.get('.article-content')
        .find('p')
        .should('contain', description)
    }

}
export const onEditArticle = new EditArticle;


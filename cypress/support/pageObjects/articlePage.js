/// <reference types="cypress" />

export class ArticleSelection {
    filArticleTitle(articleTitle){
        cy.get('[placeholder="Article Title"]')
        .clear()
        .type(articleTitle);
    }

    filDescription(description){
        cy.get('[formcontrolname="description"]')
        .clear()
        .type(description);
    }

    filBody(body){
        cy.get('[formcontrolname="body"]')
        .clear()
        .type(body);
    }

    filTags(tags){
        cy.get('[placeholder="Enter tags"]')
        .clear()
        .type(tags);

    }

    clickPublishArticleBtn(){
        cy.intercept('GET', '**/comments').as('addArticles');
        cy.contains('button' , 'Publish Article').click();
        cy.wait('@addArticles')
    }
    
    createArticle(articleTitle,description,body,tags){
        cy.get('fieldset').find('fieldset').then(inputElement => {
            cy.wrap(inputElement).eq(0).clear().type(articleTitle);
            cy.wrap(inputElement).eq(1).clear().type(description);
            cy.wrap(inputElement).eq(2).clear().type(body);
            cy.wrap(inputElement).eq(3).clear().type(tags);
        })

    }
}

export const onArticleSelection = new ArticleSelection;


/// <reference types="cypress" />


export class createArticle{

    clickNewArticleButton(){
        cy.contains('a', 'New Article').click();
        //cy.wait(50000);
    }

    fillTitle(title){
        cy.get('[placeholder="Article Title"]')
        .clear()
        .type(title)
        .should('have.value', title)
    }

    fillAboutArticle(aboutArticle){
        cy.get(`[placeholder="What's this article about?"]`)
        .clear()
        .type(aboutArticle)
        .should('have.value', aboutArticle)
    }

    fillYourArticle(yourArticle){
        cy.get(`[placeholder="Write your article (in markdown)"]`)
        .clear()
        .type(yourArticle)
        .should('have.value', yourArticle)
    }

    fillTags(tags){
        cy.get(`[placeholder="Enter tags"]`, )
        .clear()
        .type(tags)
    }

    clickPublishArticleButton(){
        cy.contains('button', 'Publish Article').click();
     }
 
}

export const onCreateArticle = new createArticle;

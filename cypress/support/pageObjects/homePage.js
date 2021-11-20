/// <reference types="cypress" />

export class HomePage {
    clickGlobalFeedTap(articleTitle){
        cy.intercept('GET', '**/api/articles**', {fixture:'articles.json'}).as('articles');
        cy.contains('a' , 'Global Feed').click();
        cy.wait('@articles');
    }
    clickHeartBtn(){
        cy.intercept('POST', '**/favorite').as('favorite')
        cy.get('app-article-preview')
        .eq(0)
        .find('button')
        .click();
        cy.wait('@favorite');
    }
   
    verifyCountFavorite(totalFavorite){
        cy.intercept('POST', '**/favorite').as('favorite')
        cy.get('app-article-preview')
        .eq(0)
        .find('button')
        .should('contain', totalFavorite);
    }
    
    verifyBackgroundColorBtn(rgbColor){
        cy.get('app-article-preview').eq(0).find('button').then(btnIconHeart => {
            cy.wrap(btnIconHeart)
            .invoke('css', 'border-color')
            .then(btnBackgroundColor => {
                expect(btnBackgroundColor).to.equal('rgb(92, 184, 92)');
            })
        })
    }
}

export const onHomePage = new HomePage;
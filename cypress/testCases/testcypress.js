/// <reference types="cypress" />

describe('Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
})

//Test wrap
it.only('Test case A', () => {
    cy.contains('a', 'Sign in').click();
    cy.get('.ng-untouched.ng-pristine.ng-invalid').then((inputValue) => {
        cy.wrap(inputValue).eq(1).type('testaccount@gmail.com')
        cy.wrap(inputValue).eq(2).type('1qazZAQ!')
        cy.contains('button', 'Sign ').click();
        cy.contains('a', 'New Article').click();
    })

    cy.get('.ng-untouched.ng-pristine.ng-valid').then((inputInform) => {
        cy.wrap(inputInform).eq(1).type('Test Title')
        cy.wrap(inputInform).eq(2).type('About Article')
        cy.wrap(inputInform).eq(3).type('Your Article')
        cy.wrap(inputInform).eq(4).type('Tag A{enter}').then((getTag) => {
            cy.get('.tag-default').then(getTag => {
            const tagText = getTag.text();
            expect(tagText).to.contain('Tag A') 
            })
        })
        cy.wrap(inputInform).eq(4).type('Tag B{enter}').then((getTag) => {
            cy.get('.tag-default').eq(1).then(getTag => {
            const tagText = getTag.text();
            expect(tagText).to.contain('Tag B') 
            })
        })
        cy.wrap(inputInform).find('.ion-close-round').eq(0).click().then((getTag) => {
            cy.get('.tag-default').then(getTag => {
                const tagText = getTag.text();
                expect(tagText).to.contain('Tag B')     
            })
        })

    })
})
})
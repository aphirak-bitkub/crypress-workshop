/// <reference types="cypress" />

import { onSignupPage } from "../support/pageObjects/signupPage";
import { onTopMenuPage } from "../support/pageObjects/topMenuPage"

describe('page object', () => {
    beforeEach(() => {
        cy.visit('/') //เรียกใช้ baseUrl จาก cypress.json
        
})

    // it('Sign up success', () => {
    //     onTopMenuPage.clickSignUpLink();
    //     onSignupPage.fillusername('testtest1234');
    //     onSignupPage.fillemail('test@gmail.com');
    //     onSignupPage.fillpassword('test123');
    //     onSignupPage.clickSignupButton();
    // })

    it.only('Custom commands', () => {

        cy.intercept('POST', '**/api/users/login', {fixture: 'loginSuccess.json'});
        //cy.log('xxxx');
        cy.signupPage('testtesttest', 'testtesttest@gmail.com', 'testtest');
        cy.signinPage('testtesttest@gmail.com', 'testtest')
        cy.createArticle('Article_Title', 'Article_About', 'Article_YourAbout', 'Tag A{enter}')

    })

})


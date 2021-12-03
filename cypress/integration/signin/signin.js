import { Given, When, Then, And, But} from "cypress-cucumber-preprocessor/steps";
import { onSinginPage } from "../../support/pageObjects/singInPage";
import { onTopMenuPage } from "../../support/pageObjects/topMenuPage";


Given('I open sign in page', () => {
     cy.visit('/');
     onTopMenuPage.clickSingInLink()
})

When('I input username {string}', (email) => {
     onSinginPage.filEmail(email);
})

And('I input password {string}', (password) => {
     onSinginPage.filPassword(password);
  
})

And('I click singin button', () => {
     onSinginPage.clickLogin();
  
})

Then('I see login page successfully {string}', (username) => {
    cy.get('a.nav-link').should('contain', username);
  
})
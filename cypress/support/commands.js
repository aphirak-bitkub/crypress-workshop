// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { onCreateArticle } from "./pageObjects/createArticle";
import { onSignInPage } from "./pageObjects/signInPage";
import { onSignupPage } from "./pageObjects/signupPage";
import { onTopMenuPage } from "./pageObjects/topMenuPage";


Cypress.Commands.add('signinPage', (email, password) => {
    onTopMenuPage.clickSignInLink();
    onSignInPage.fillemail(email)
    onSignInPage.fillpassword(password);
    onSignInPage.clickSigninButton();
})

Cypress.Commands.add('signupPage', (username, email, password) => {
    onTopMenuPage.clickSignUpLink();
    onSignupPage.fillusername(username);
    onSignupPage.fillemail(email);
    onSignupPage.fillpassword(password);
    onSignupPage.clickSignupButton();
})

Cypress.Commands.add('createArticle', (title, aboutArticle, yourArticle, tags) => {
    onCreateArticle.clickNewArticleButton();
    onCreateArticle.fillTitle(title);
    onCreateArticle.fillAboutArticle(aboutArticle);
    onCreateArticle.fillYourArticle(yourArticle);
    onCreateArticle.fillTags(tags);
    onCreateArticle.clickPublishArticleButton();
    
})


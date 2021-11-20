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

import { onArticleSelection } from "./pageObjects/articlePage";
import { onSinginPage } from "./pageObjects/singInPage";
import { onSingupPage } from "./pageObjects/singupPage";
import { onTopMenuPage } from "./pageObjects/topMenuPage";

Cypress.Commands.add('loginToAppLication',(email, password) => {
    cy.visit('/');
    onTopMenuPage.clickSingInLink();
    onSinginPage.login(email, password);
})
 
Cypress.Commands.add('siginUpToWebSite',(username, email, password) => {
    cy.visit('/');
    onTopMenuPage.clickSingUpLink();
    onSingupPage.filUsername(username);
    onSingupPage.filEmail(email);
    onSingupPage.filPassword(password);
    onSingupPage.clickSingUpButton();
})


Cypress.Commands.add('createArticle',(articleTitle,body,description,tags) => {
   onArticleSelection.filArticleTitle(articleTitle);
   onArticleSelection.filDescription(description);
   onArticleSelection.filBody(body);
   onArticleSelection.filTags(tags);
   onArticleSelection.clickPublishArticleBtn();
})
/// <reference types="cypress" />

import { onTopMenuPage } from "../../support/pageObjects/topMenuPage";
import { onEditArticle } from "../../support/pageObjects/editeArticlePage";
import { onCommonPage } from "../../support/pageObjects/commonPage";
import { onRandomString } from "../../support/pageObjects/funcCommon";


beforeEach('sign up',() =>  {
  var username = onRandomString.randomString(8)
  var email = onRandomString.randomString(8)
  var password = onRandomString.randomString(8)

  cy.siginUpToWebSite(username,email,password)
  onTopMenuPage.clickNewArticleLink();
})

describe('article',() => {
  
  it('Create a new article successfully',( ) => {
    var articleTitle = onRandomString.randomString(8)

    cy.createArticle(articleTitle,'A1-TEST','A1-TEST','A1-TEST{enter}')
    onEditArticle.verifyBannerarticleTitle(articleTitle)
    onEditArticle.verifyDescription('A1-TEST')
  })

    it('Create a new article duplicate with title',( ) => {
      var articleTitle = onRandomString.randomString(8)
  
      cy.createArticle(articleTitle,'TEST','TEST','TEST{enter}')
      onEditArticle.verifyBannerarticleTitle(articleTitle)
      onEditArticle.verifyDescription('TEST')
      onTopMenuPage.clickNewArticleLink();

      cy.createArticle(articleTitle,'TEST','TEST','TEST{enter}')
      onCommonPage.VerifyRedMsgError('title must be unique');
    })
})


/// <reference types="cypress" />

import { onCommonPage } from "../../support/pageObjects/commonPage";
import { onRandomString } from "../../support/pageObjects/funcCommon";
import { onTopMenuPage } from "../../support/pageObjects/topMenuPage"


beforeEach('open baseUrl',() =>  {
    cy.visit('/')
})

describe('Sing Up', () => {

    it('sing up successfully',() => {
        var username = onRandomString.randomString(8)
        var email = onRandomString.randomString(8)
        var password = onRandomString.randomString(8)

        cy.siginUpToWebSite(username,email,password)
        onTopMenuPage.clickNewArticleLink();
     })

    it('sing up duplicate with username',( ) => {
        cy.siginUpToWebSite('mai','aaaaa1@bitkub.com','1234516')
         onCommonPage.VerifyRedMsgError('username has already been taken')
    })

    it('sing up duplicate with email',( ) => {
        cy.siginUpToWebSite('16372485298649460','aaa2@bitkub.com','1234516')
        onCommonPage.VerifyRedMsgError('email has already been taken')
     })
})


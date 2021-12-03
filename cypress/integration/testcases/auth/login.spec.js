/// <reference types="cypress" />

// import { onSinginPage } from "../../../support/pageObjects/signinPage/signinPage"
import { onSinginPage } from "../../../support/pageObjects/signinPage/signinPage"
import { onTopMenuPage } from "../../../support/pageObjects/topMenu/topMenuPage"



  describe('Login',() => {
  
    it('Login successfully',( ) => {
        cy.visit('http://bitkub.io')
        cy.wait(5000)
        onTopMenuPage.clickSignInbButton();
        onSinginPage.filEmail('test');
        onSinginPage.filPassword('test');
        
  })

})


/// <reference types="cypress" />

import { onHomePage } from "../../support/pageObjects/homePage";


beforeEach('prepare data to creat new article',() =>  {
   cy.loginToAppLication('vccxvaxq','gkaicoqy')
  })

describe('favorite',() => {
  
    it('press add favorite',( ) => {
    onHomePage.clickGlobalFeedTap();
    onHomePage.clickHeartBtn();
    onHomePage.verifyCountFavorite('1')
    onHomePage.verifyBackgroundColorBtn('rgb(92, 184, 92)')
  })

})


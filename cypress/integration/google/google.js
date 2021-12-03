import { Given, When, Then, And, But} from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
  })

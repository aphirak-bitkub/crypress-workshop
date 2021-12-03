Feature: Sign in to app

   user want to open a search engine
  
  Scenario: Signin 
    Given I open sign in page
    When I input username "mai1"
    And I input password "mai1"
    And I click singin button
    Then I see login page successfully "mai1"
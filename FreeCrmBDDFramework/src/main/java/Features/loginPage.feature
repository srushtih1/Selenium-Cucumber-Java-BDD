#@LoginFeature
Feature: Swag Labs login feature

  #@LoginCheck
  Scenario: Swag Labs login test scenario
    Given user is already on login page
    When title of login page is SwagLabs
    Then user enters username and password
    And click on login button
    Then verify user is on home page
    And close the browser
    
  #@LoginCheckWithoutExamples
  Scenario: Swag Labs login test scenario without Examples but data driven
    Given user is already on login page
    When title of login page is SwagLabs
    Then user logs "visual_user" and "secret_sauce"
    And click on login button
    Then verify user is on home page
    And close the browser  

  #@LoginCheckWithExamples
  Scenario Outline: Swag Labs login test scenario with Examples data driven
    Given user is already on login page
    Then user enters <username> and <password> to login
    And close the browser  

    Examples: 
      | username  	  | password  |
      | standard_user | secret_sauce |

@LoginFeature
Feature: Swag Labs login feature

  @LoginCheck @RegressionTest
  Scenario: Swag Labs login test scenario
    Given user is already on login page
    When title of login page is SwagLabs
    Then user enters username and password
    And click on login button
    Then verify user is on home page
    And close the browser
    
  @LoginCheckWithoutExamples @DataDrivenTypesTest
  Scenario: Swag Labs login test scenario without Examples but data driven
    Given user is already on login page
    When title of login page is SwagLabs
    Then user logs "visual_user" and "secret_sauce"
    And click on login button
    Then verify user is on home page
    And close the browser  

  @LoginCheckWithExamples @DataDrivenTypesTest
  Scenario Outline: Swag Labs login test scenario with Examples data driven
    Given user is already on login page
    Then user enters <username> and <password> to login
    And close the browser  

    Examples: 
      | username  	  | password  |
      | standard_user | secret_sauce |

  @LoginCheckWithDataTablesApproachwithList @DataDrivenTypesTest
  Scenario: Swag Labs login test scenario with Data tables approach for data driven
    Given user is already on login page
    When title of login page is SwagLabs
    Then login with username and password data
    |visual_user|secret_sauce|
    And click on login button
    Then verify user is on home page
    And close the browser    
 
  @LoginCheckWithDataTablesApproachWithMap @DataDrivenTypesTest
  Scenario: Swag Labs login test scenario with Data tables approach for data driven using Maps
    Given user is already on login page
    When title of login page is SwagLabs
    Then add username and password
    |username|password|
    |visual_user|secret_sauce|
    |standard_user | secret_sauce |
    And close the browser  
    
    
    
    
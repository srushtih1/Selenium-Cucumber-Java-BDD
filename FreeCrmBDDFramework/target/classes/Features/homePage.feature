#@HomePageFeature
Feature: Swag Labs home page feature

  @homeDropdownCheck
  Scenario Outline: Swag Labs home page drop down to list products test 
    Given user is already on login page
    Then user enters <username> and <password> to login
    Then verify products as per dropdown <value>
    And close the browser
    
    Examples: 
      | username  	  | value 		  | password  |
      | standard_user | Name (A to Z) | secret_sauce |
      | standard_user | Name (Z to A) | secret_sauce |
      | standard_user | Price (low to high) | secret_sauce |
      | standard_user | Price (high to low) | secret_sauce |
	

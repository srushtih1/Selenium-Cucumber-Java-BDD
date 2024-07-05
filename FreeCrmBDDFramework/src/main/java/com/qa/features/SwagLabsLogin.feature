Feature: Swag Labs Login Page

@LoginCheck
Scenario: Validate Swag labs home page test
	
	Given user launches browser
	Then user is on login page
	Then user enters username, password and clicks login button
	Then validate the home page title
	And validate the products title
	
	
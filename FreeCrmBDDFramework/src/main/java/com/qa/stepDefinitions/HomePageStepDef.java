package com.qa.stepDefinitions;

import javax.security.auth.login.LoginContext;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class HomePageStepDef extends TestBase{
	
	//LoginPage loginPage = new LoginPage(); *** cannot do this as it will initialized here but will throw a null pointer error while entering the user name method in LoginPage.java class
	LoginPage loginPage;
	HomePage homePage;
	
	@Given("^user launches browser$")
	public void user_launches_browser() {
		TestBase.initialization(); // as it is static method. got null pointer exception before without prop initialization i.e calling the constructor, so extended the class to TestBase
	}

	@Then("^user is on login page$")
	public void user_is_on_login_page() {
		loginPage = new LoginPage();
		String login_title = loginPage.validateLoginPage();
	    Assert.assertEquals("Swag Labs", login_title);
	}

	@Then("^user enters username, password and clicks login button$")
	public void user_enters_username_password_and_clicks_login_button() {
		homePage = loginPage.login(prop.getProperty("username"), prop.getProperty("password"));
	}

	@Then("^validate the home page title$")
	public void validate_the_home_page_title() {
		String home_title = homePage.validateHomePage_title();
	    Assert.assertEquals("Swag Labs", home_title);
	}

	@Then("^validate the products title$")
	public void validate_the_products_title() {
	    Assert.assertTrue(homePage.validate_products_displayed());
	}


}

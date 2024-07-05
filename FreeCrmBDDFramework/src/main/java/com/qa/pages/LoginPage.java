package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class LoginPage extends TestBase{
	
	//page factory -> all web  elements from login page
	@FindBy(id = "user-name")
	WebElement username;
	
	@FindBy(id = "password")
	WebElement password;
	
	@FindBy(id = "login-button")
	WebElement login_btn;
	
	@FindBy(className = "login_logo")
	WebElement logo;
	
	//initializing the page objects -- constructor login page
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
	public String validateLoginPage() {
		return driver.getTitle();
	}
	
	public boolean validateSwaglabsLogo() {
		return logo.isDisplayed();
	}
	
	public HomePage login(String usrnm, String pswd) {
		username.sendKeys(usrnm);
		password.sendKeys(pswd);
		login_btn.click();
		
		return new HomePage();
	}
	
}

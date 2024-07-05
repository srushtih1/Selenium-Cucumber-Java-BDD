package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class HomePage extends TestBase{
	
	@FindBy(css = ".header_secondary_container > span")
	WebElement products_title;
	
	
	public HomePage() {
		PageFactory.initElements(driver, this);
	}
	
	public String validateHomePage_title() {
		return driver.getTitle();
	}
	
	public boolean validate_products_displayed() {
		System.out.println("Home page products title --> " + products_title.getText());
		return products_title.isDisplayed();
	}
}

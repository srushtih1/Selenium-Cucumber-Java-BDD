package StepDefinitions;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.fasterxml.jackson.databind.jsontype.impl.ClassNameIdResolver;

import org.openqa.selenium.edge.EdgeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	//selenium code
	WebDriver driver;
	
	// @Before("@LoginCheckWithoutExamples") or @Before(order=0) , Before(order=1)
	@Before
	@Given("^user is already on login page$")
	public void user_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\19515\\Downloads\\chromedriver-win64 (1)\\chromedriver-win64\\chromedriver.exe");
		// OR-->
		// WebDriverManager.chromedriver().setup();
		// WebDriverManager.chromedriver().browserVersion("126.0.6478.127").setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.saucedemo.com/");
		// driver.get("https://freecrm.com/");
	}
	
	@When("^title of login page is SwagLabs$")
	public void title_of_login_page() {
		String title_saucedemo = driver.getTitle();
		System.out.println("Title driver got - " + title_saucedemo);
		// System.out.printf("Title driver got - %s%n " , title_saucedemo);
		Assert.assertEquals("Swag Labs", title_saucedemo);
	}
	
	@Then("^user enters username and password$")
	public void user_enters_username_password() {
		// driver.findElement(By.className("btn btn-primary btn-xs-2 btn-shadow btn-rect btn-icon btn-icon-left")).click();
		driver.findElement(By.id("user-name")).sendKeys("standard_user");
		driver.findElement(By.id("password")).sendKeys("secret_sauce");
	}
	
	@And("^click on login button$")
	public void click_login_button() {
		driver.findElement(By.id("login-button")).click();
	}
	
	@Then("^verify user is on home page$")
	public void verify_user_on_home_page() {
		WebElement home_page_products = driver.findElement(By.className("header_secondary_container"));
		Assert.assertEquals(true, home_page_products.isDisplayed());
		System.out.println("Succesffuly landed on the home page after login !! " + home_page_products.findElement(By.className("title")).getText());
		
		//driver.quit();
	}
	
	@Then("^user enters (.*) and (.*) to login$")
	public void login_to_Swag_labs(String username, String password) throws Throwable{
		String title = driver.getTitle();
		System.out.println("Title driver got - " + title);
		Assert.assertEquals("Swag Labs", title);
		
		driver.findElement(By.id("user-name")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
		
		driver.findElement(By.id("login-button")).click();
		
		WebElement home_page_products = driver.findElement(By.className("header_secondary_container"));
		Assert.assertTrue("Home page products section is not displayed!", home_page_products.isDisplayed());
		System.out.println("Succesffuly Login to the home page !! " + home_page_products.findElement(By.className("title")).getText());
		
	}
	
	@After
	@And("^close the browser$")
	public void close_browser() {
	    if (driver != null) {
	        driver.quit();
	    }
	}
	
	@Then("^user logs \"(.*)\" and \"(.*)\"$")
	public void login_without_examples(String username, String password) {
		driver.findElement(By.id("user-name")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
	}
	
	@Then("^login with username and password data$")
	public void login_with_datatable_use(DataTable credentials) {
		List<List<String>> data = credentials.raw();
		driver.findElement(By.id("user-name")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("password")).sendKeys(data.get(0).get(1));
	}
	
	@Then("^add username and password$")
	public void login_with_datatable_with_maps(DataTable credentials) {
		for (Map<String, String> data : credentials.asMaps(String.class, String.class)){
			WebDriverWait wait = new WebDriverWait(driver, 20);
			
			driver.findElement(By.id("user-name")).sendKeys(data.get("username"));
			driver.findElement(By.id("password")).sendKeys(data.get("password"));
			driver.findElement(By.id("login-button")).click();
			
			WebElement home_page_products = driver.findElement(By.className("header_secondary_container"));
			Assert.assertEquals(true, home_page_products.isDisplayed());
			System.out.println("Succesffuly landed on the home page after login !! " + home_page_products.findElement(By.className("title")).getText());
			
			driver.findElement(By.id("react-burger-menu-btn")).click();
			
			wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.className("bm-menu-wrap")));
			WebElement logout_btn = driver.findElement(By.cssSelector(".bm-item-list > a#logout_sidebar_link"));
			JavascriptExecutor js = (JavascriptExecutor)driver;
			js.executeScript("arguments[0].click();", logout_btn);
			//logout_btn.click();			
		}
	}
	
	
	@Then("^verify products as per dropdown (.*)$")
	public void verify_products_as_per_drop_dpwn_list(String dropdown_value) throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(driver, 20);
		
		driver.findElement(By.className("product_sort_container")).click();
//		***code if the locator is in different frame
//		driver.switchTo().frame("mainpanel");
//		Actions action = new Actions(driver);
//		action.moveToElement(driver.findElement(By.className("product_sort_container"))).build().perform();
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//*[@id='header_container']/div[2]/div/span/select/option")));
		List<WebElement> dropdown_options = driver.findElements(By.xpath("//*[@id=\"header_container\"]/div[2]/div/span/select/option"));
		
		// System.out.println("located the options in list");
		for (WebElement val : dropdown_options) {
			// System.out.println("Dropdown value -- " + val.getText());
			if (val.getText().equals(dropdown_value)) {
				System.out.println("Clicked on the dropdown - " + val.getText());
				val.click();
				System.out.println("clicked");
				break;
			}else {
				continue;
			}
		}
		
		//wait.until(ExpectedConditions.stalenessOf(driver.findElement(By.cssSelector(".inventory_item_label > a > div"))));
		List<WebElement> allProduct = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.cssSelector(".inventory_item_label > a > div.inventory_item_name")));

		//List<WebElement> allProduct = driver.findElements(By.cssSelector(".inventory_item_label > a >div"));
		switch(dropdown_value) {
			case "Name (A to Z)" :
				Assert.assertEquals("Sauce Labs Backpack", allProduct.get(0).getText());
				break;
			case "Name (Z to A)" :
				Assert.assertEquals("Test.allTheThings() T-Shirt (Red)", allProduct.get(0).getText());
				break;
			case "Price (low to high)" :
				Assert.assertEquals("Sauce Labs Onesie", allProduct.get(0).getText());
				break;
			case "Price (high to low)" :
				Assert.assertEquals("Sauce Labs Fleece Jacket", allProduct.get(0).getText());
				break;
			default :
				System.out.println("Did not match any option!");
				break;
		}
		
		System.out.println("Successfully filtered as per - " + dropdown_value);
	}
}

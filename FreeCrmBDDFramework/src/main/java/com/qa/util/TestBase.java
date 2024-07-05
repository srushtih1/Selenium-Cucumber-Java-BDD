package com.qa.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TestBase {
	
	//initialization of driver and its properties
	public static WebDriver driver;
	public static Properties prop;
	
	//constructor to access the properties file for details with its path
	public TestBase() {
		try {
			prop = new Properties();
			FileInputStream fis = new FileInputStream("/Users/19515/eclipse-workspace-new/CucumberJavaSeleniumDemo/FreeCrmBDDFramework/src/main"
					+ "/java/com/qa/config/config.properties");
			prop.load(fis);
		}catch(IOException e) {
			e.getMessage();
		}
	}
	
	//initilization of driver as per browser and url launch
	public static void initialization() {
		String browserName =  prop.getProperty("browser");
		
		if(browserName.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\19515\\Downloads\\chromedriver-win64 (1)\\chromedriver-win64\\chromedriver.exe");
			driver = new ChromeDriver();
		}else if(browserName.equals("FF")) {
			System.setProperty("webdriver.gecko.driver", "C:\\Users\\19515\\Downloads\\chromedriver-win64 (1)\\chromedriver-win64\\chromedriver.exe");
			driver = new FirefoxDriver();
		}
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		driver.get(prop.getProperty("url"));
	}
	
}

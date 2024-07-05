package com.qa.testRunner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/19515/eclipse-workspace-new/CucumberJavaSeleniumDemo/FreeCrmBDDFramework/src/main/java/com/qa/features", //feature file path
		glue = {"com/qa/stepDefinitions"},
		format = {"pretty", "html:test-output", "json:json-output/cucumber.json", "junit:junit-xml/cucumber.xml"}, //for pretty output in console and different reporting format like html, json, junit-xml
		dryRun = false,
		monochrome = true,
		strict = true
		//tags = {""}
		)

public class TestRunner {

}

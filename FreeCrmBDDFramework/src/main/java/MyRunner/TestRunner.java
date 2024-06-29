package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/19515/eclipse-workspace-new/CucumberJavaSeleniumDemo/FreeCrmBDDFramework/src/main/java/Features", //feature file path
		glue = {"StepDefinitions"},
		format = {"pretty", "html:test-output", "json:json-output/cucumber.json", "junit:junit-xml/cucumber.xml"}, //for pretty output in console and different reporting format like html, json, junit-xml
		dryRun = false,
		monochrome = true,
		strict = true,
		tags = {"@RegressionTest , @LoginCheckWithExamples , ~@LoginCheckWithoutExamples"}
		)

public class TestRunner {

}

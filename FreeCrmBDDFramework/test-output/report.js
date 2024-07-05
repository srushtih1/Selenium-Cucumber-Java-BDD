$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SwagLabsLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Swag Labs Login Page",
  "description": "",
  "id": "swag-labs-login-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Swag labs home page test",
  "description": "",
  "id": "swag-labs-login-page;validate-swag-labs-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters username, password and clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate the home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate the products title",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDef.user_launches_browser()"
});
formatter.result({
  "duration": 3456608100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.user_is_on_login_page()"
});
formatter.result({
  "duration": 40113300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.user_enters_username_password_and_clicks_login_button()"
});
formatter.result({
  "duration": 418824400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.validate_the_home_page_title()"
});
formatter.result({
  "duration": 7328300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.validate_the_products_title()"
});
formatter.result({
  "duration": 90938400,
  "status": "passed"
});
});